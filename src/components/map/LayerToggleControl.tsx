import { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import Icon, { IconName } from "../common/Icons";
import Switch from "../Switch";

export interface MapToggleLayerConfig {
  ids: string[];
  name: string;
  visible: boolean;
}

interface Props {
  mapContainerRef: React.RefObject<HTMLDivElement>;
  toggleLayers: MapToggleLayerConfig[];
  onLayerToggle: (layer: MapToggleLayerConfig, visible: boolean) => void;
}

export const LayerToggleControl: React.FC<Props> = ({
  mapContainerRef,
  toggleLayers,
  onLayerToggle,
}) => {
  const [isLayersPanelOpen, setIsLayersPanelOpen] = useState(false);
  const buttonToggleLayerRef = useRef<HTMLButtonElement | null>(null);
  const layersPanelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = mapContainerRef.current;
    const button = buttonToggleLayerRef.current;
    if (!container || !button) return;

    function positionButton(button: HTMLButtonElement, container: HTMLDivElement) {
      const topLeftCtrl = container.querySelector<HTMLDivElement>('.maplibregl-ctrl-top-left');
      button.style.position = 'absolute';
      button.style.left = '10px';
      button.style.zIndex = '1000';
      if (topLeftCtrl) {
        const offset = (topLeftCtrl.offsetTop || 0) + topLeftCtrl.offsetHeight + 8;
        button.style.top = `${offset}px`;
      } else {
        button.style.top = '20px';
      }
      if (button.parentElement !== container) {
        container.appendChild(button);
      }
    }

    positionButton(button, container);

    const observer = new MutationObserver(() => {
      setTimeout(() => positionButton(button, container), 0);
    });

    observer.observe(container, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [isLayersPanelOpen, mapContainerRef]);

  useEffect(() => {
    if (!isLayersPanelOpen) return;
    const btn = buttonToggleLayerRef.current;
    const panel = layersPanelRef.current;
    const container = mapContainerRef.current;
    if (btn && panel && container) {
      const btnRect = btn.getBoundingClientRect();
      const contRect = container.getBoundingClientRect();

      const left = btnRect.left - contRect.left;
      const top = btnRect.top - contRect.top + btn.offsetHeight + 8;
      panel.style.position = 'absolute';
      panel.style.left = `${left}px`;
      panel.style.top = `${top}px`;
      panel.style.zIndex = '1001';
    }
  }, [isLayersPanelOpen, mapContainerRef]);

  if (!toggleLayers || toggleLayers.length === 0) return null;

  return (
    <>
      <LayersButton
        ref={buttonToggleLayerRef}
        title="Sluoksnių valdymas"
        onClick={() => setIsLayersPanelOpen((v) => !v)}
      >
        <LayerIcon name={IconName.layer} $size="2rem" $color="#1f2937" />
      </LayersButton>
      {isLayersPanelOpen && (
        <LayersPanel ref={layersPanelRef}>
          <PanelHeader>Sluoksniai</PanelHeader>
          <LayersControl>
            {toggleLayers.map((layer) => (
              <LayerItem key={layer.ids.join('-')}>
                <LayerInfo>
                  <LayerIcon name={IconName.layer} $size="1.8rem" $color="#9ca3af" />
                  <span>{layer.name}</span>
                </LayerInfo>
                <Switch
                  size="sm"
                  value={layer.visible}
                  onChange={() => onLayerToggle(layer, !layer.visible)}
                  labelPosition="left"
                />
              </LayerItem>
            ))}
          </LayersControl>
        </LayersPanel>
      )}
    </>
  );
};

const LayersButton = styled.button`
  position: absolute;
  z-index: 1000;
  display:flex;
  align-items: center;
  background-color: #ffffff;
  border-color: transparent;
  border-radius: .25rem;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: .5rem;
  outline: 2px solid transparent;
  outline-offset: 2px;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(.4,0,.2,1);
  transition-duration: .15s;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const LayerIcon = styled(Icon)<{ $size: string; $color?: string }>`
  width: ${({ $size }) => ($size ? $size : '2.5rem')};
  height: ${({ $size }) => ($size ? $size : '2.5rem')};
  fill: ${({ $color }) => ($color ? $color : 'currentColor')}; 
`;

const LayersPanel = styled.div`
  position: absolute;
  left: 10px;
  z-index: 1000;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 16px;
  width: 260px;
`;

const PanelHeader = styled.div`
  font-weight: bold;
  margin-bottom: 12px;
  font-size: 1.4rem;
  line-height: 1.25rem;
`;

const LayersControl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const LayerItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LayerInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    font-size: 1.3rem;
  }
`;