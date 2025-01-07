import { useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FeatureCollection } from '../types';
import FieldWrapper from './common/FieldWrapper';

interface MapFieldProps extends Partial<HTMLIFrameElement> {
  mapHost: string;
  mapPath: string;
  onChange: (value: FeatureCollection) => void;
  value?: FeatureCollection;
  label?: string;
  error?: string;
}

const MapField = ({
  mapHost,
  mapPath = '/edit?types[]=point&buffer=xl',
  value,
  label,
  error,
  onChange,
  ...rest
}: MapFieldProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleSaveGeom = useCallback(
    (event: MessageEvent) => {
      const mapIframeMsg = event?.data?.mapIframeMsg;
      if (event.origin === mapHost && mapIframeMsg) {
        if (mapIframeMsg?.data) {
          onChange(JSON.parse(mapIframeMsg.data));
        }
        if (mapIframeMsg?.click) {
          onChange(mapIframeMsg?.click);
        }
      }
    },
    [mapHost, onChange],
  );

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
