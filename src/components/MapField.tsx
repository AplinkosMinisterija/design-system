import { useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FeatureCollection } from '../types.ts';
import FieldWrapper from '../common/FieldWrapper.tsx';

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
  const iframeRef = useRef<any>(null);

  const handleSaveGeom = useCallback(
    (event: any) => {
      if (event.origin === mapHost) {
        onChange(JSON.parse(event?.data?.mapIframeMsg?.data));
      }
    },
    [onChange],
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
        aria-hidden="false"
        tabIndex={1}
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
