import { useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FeatureCollection } from '../types';

const MapField = ({
  mapHost,
  mapPath = '/edit?types[]=point&buffer=xl',
  value,
  onChange,
  ...rest
}: {
  mapHost: string;
  mapPath: string;
  value: FeatureCollection;
  onChange: (value: FeatureCollection) => void;
}) => {
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
    <Iframe
      src={`${mapHost}${mapPath}`}
      ref={iframeRef}
      width={'100%'}
      allowFullScreen={true}
      onLoad={handleLoadMap}
      aria-hidden="false"
      tabIndex={1}
      {...rest}
    />
  );
};

export default MapField;

const Iframe = styled.iframe`
  height: 400px;
  width: 100%;
  display: block;
  border: 1px solid #d4d5de;
  border-radius: 4px;
  margin-top: 8px;
`;
