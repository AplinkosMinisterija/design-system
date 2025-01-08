import { isEmpty } from 'lodash';
import { useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FeatureCollection } from '../types';
import FieldWrapper from './common/FieldWrapper';

interface MapFieldProps extends Partial<HTMLIFrameElement> {
  mapHost: string;
  mapPath: string;
  onChange?: (value: FeatureCollection) => void;
  onClick?: (value: any) => void;
  value?: FeatureCollection;
  label?: string;
  error?: string;
  filter?: string;
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
  ...rest
}: MapFieldProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleSaveGeom = useCallback(
    (event: MessageEvent) => {
      const mapIframeMsg = event?.data?.mapIframeMsg;
      if (event.origin === mapHost && mapIframeMsg) {
        if (mapIframeMsg?.data && onChange) {
          onChange(JSON.parse(mapIframeMsg.data));
        } else if (mapIframeMsg?.click && onClick) {
          onClick(mapIframeMsg?.click);
        }
      }
    },
    [mapHost, onChange],
  );

  const handleSetSpecies = () => {
    if (!iframeRef.current?.contentWindow || !filter || isEmpty(filter)) return;

    iframeRef?.current?.contentWindow.postMessage({ eventName: 'filter', filter }, '*');
  };

  useEffect(() => {
    handleSetSpecies();
  }, [iframeRef?.current?.contentWindow, JSON.stringify(filter)]);

  useEffect(() => {
    window.addEventListener('message', handleSaveGeom);
    return () => window.removeEventListener('message', handleSaveGeom);
  }, [handleSaveGeom]);

  const handleLoadMap = () => {
    if (!value) return;
    iframeRef?.current?.contentWindow?.postMessage({ geom: value }, '*');
  };

  return (
    <FieldWrapper label={label} error={error}>
      <Iframe
        {...rest}
        $error={!!error}
        src={`${mapHost}${mapPath}`}
        ref={iframeRef}
        width={'100%'}
        allowFullScreen={true}
        onLoad={handleLoadMap}
        aria-label={`Interactive map ${label}`}
        aria-describedby={error ? `${label}-error` : undefined}
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
