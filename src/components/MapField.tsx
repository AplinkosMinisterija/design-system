import { isEmpty } from 'lodash';
import { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { FeatureCollection } from '../types';
import { Boundaries } from '../utils';
import FieldWrapper from './common/FieldWrapper';

interface MapFieldProps extends Partial<HTMLIFrameElement> {
  mapHost: string;
  mapPath: string;
  onChange?: (value: FeatureCollection) => void;
  onClick?: (value: any) => void;
  value?: FeatureCollection;
  label?: string;
  error?: string;
  filter?: { [key: string]: any };
  accessibilityDescription?: string;
  accessibilityContact?: string;
}

const MapField = ({
  mapHost,
  mapPath = '/edit?types[]=point&buffer=xl',
  value,
  label,
  error,
  onChange,
  onClick,
  filter,
  accessibilityDescription,
  accessibilityContact,
  ...rest
}: MapFieldProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [loading, setLoading] = useState(true);
  const mapId = `map-description-${Math.random().toString(36).slice(2)}`;

  const handleSaveGeom = useCallback(
    async (event: MessageEvent) => {
      const mapIframeMsg = event?.data?.mapIframeMsg;
      if (event.origin === mapHost && mapIframeMsg) {
        if (mapIframeMsg?.data && onChange) {
          const geojson =
            typeof mapIframeMsg.data === 'string'
              ? JSON.parse(mapIframeMsg.data)
              : mapIframeMsg.data;

          const geometry = geojson.features[0].geometry;

          const geometryWithCrs = {
            ...geometry,
            crs: {
              type: 'name',
              properties: { name: 'EPSG:3346' },
            },
          };

          try {
            const data = await Boundaries.municipalitiesSearch({
              requestBody: {
                filters: [
                  {
                    geometry: {
                      method: 'intersects',
                      geojson: JSON.stringify(geometryWithCrs),
                    },
                  },
                ],
              },
            });

            if (!data?.items?.length) {
              return alert(`Pasirinkta geometrija nėra Lietuvos teritorijoje`);
            }
          } catch (err) {
            // Boundaries lookup is a best-effort guard; if it fails (e.g. PostGIS
            // rejects an invalid/self-intersecting polygon, network error, 5xx),
            // do not silently drop the user's geometry — let the form submit and
            // rely on server-side validation.
            console.error('Failed to verify geometry against municipalities', err);
          }

          onChange(geojson);
        } else if (mapIframeMsg?.click && onClick) {
          onClick(mapIframeMsg?.click);
        }
      }
    },
    [mapHost, onChange],
  );

  useEffect(() => {
    if (!iframeRef.current?.contentWindow || loading || !filter || isEmpty(filter)) return;

    iframeRef?.current?.contentWindow.postMessage({ eventName: 'filter', ...filter }, '*');
  }, [iframeRef?.current?.contentWindow, loading, JSON.stringify(filter)]);

  useEffect(() => {
    window.addEventListener('message', handleSaveGeom);
    return () => window.removeEventListener('message', handleSaveGeom);
  }, [handleSaveGeom]);

  const handleLoadMap = () => {
    setLoading(false);

    if (!value) return;
    iframeRef?.current?.contentWindow?.postMessage({ geom: value }, '*');
  };

  return (
    <FieldWrapper label={label} error={error}>
      <VisuallyHidden id={mapId}>
        {accessibilityDescription} {accessibilityContact}
      </VisuallyHidden>
      <Iframe
        {...rest}
        $error={!!error}
        src={`${mapHost}${mapPath}`}
        ref={iframeRef}
        width="100%"
        allowFullScreen={true}
        onLoad={handleLoadMap}
        aria-label={`Interaktyvus žemėlapis${label ? ` – ${label}` : ''}`}
        aria-describedby={mapId}
        title={`Žemėlapis${label ? ` – ${label}` : ''}`}
        tabIndex={0}
      />
    </FieldWrapper>
  );
};

export default MapField;

const Iframe = styled.iframe<{ $error: boolean }>`
  height: 400px;
  width: 100%;
  display: block;
  border: 1px solid ${({ $error, theme }) => ($error ? theme.colors.danger : theme.colors.border)};
  border-radius: 4px;
  margin-top: 8px;
`;

const VisuallyHidden = styled.div`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;
