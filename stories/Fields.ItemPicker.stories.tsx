import type { Meta, StoryObj } from '@storybook/react';

import ItemPicker from '../src/components/ItemPicker';
import HeadlessItemPicker from '../src/components/HeadlessItemPicker';
import StoryWrapper from '../src/components/common/StoryWrapper';
import { useState } from 'react';
import styled from 'styled-components';

const meta: Meta<typeof ItemPicker> = {
  component: ItemPicker,
  title: 'Design system/Fields/Item Picker',
};

export default meta;
type Story = StoryObj<typeof ItemPicker>;

const timeRangeItems = [
  {
    key: 'DAY',
    name: 'Šios dienos',
  },
  {
    key: 'WEEK',
    name: 'Šios savaitės',
  },
  {
    key: 'MONTH',
    name: 'Šio mėnesio',
  },
  {
    key: 'FUTURE',
    name: 'Būsimi',
  },
];


const apps = [
  {
    key: 'HUNT',
    name: 'Medžioklė',
  },
  {
    key: 'FISHING',
    name: 'Žuvinimas',
  },
  {
    key: 'BUILDING',
    name: 'Statybos leidimai',
  },
  {
    key: 'CUTTING_FOREST',
    name: 'Miško kirtimas',
  },
];

const stuff = [
  {
    key: 'headless',
  },
  {
    key: 'reusable',
  },
  {
    key: 'item',
  },
  {
    key: 'picker',
  },
];

export const ItemPickerFieldStory: Story = {
  name: 'ItemPicker',
  render: () => {
    const [selectedApps, setSelectedApps] = useState([]);
    const [selectedStuff, setSelectedStuff] = useState([]);
    const [selectedTime, setSelectedTime] = useState([]);
    return (
      <StoryWrapper>
        <ItemPicker 
          allowMultipleSelection
          getItemKey={(item) => item.key}
          getItemRenderString={(item) => item.name}
          data={apps}
          selectedItems={selectedApps}
          setSelectedItems={(items) => setSelectedApps(items)}
        />
        <ItemPicker 
          getItemKey={(item) => item.key}
          getItemRenderString={(item) => item.name}
          data={timeRangeItems}
          selectedItems={selectedTime}
          setSelectedItems={(items) => setSelectedTime(items)}
        />
        <PickerWrapper>
          <HeadlessItemPicker 
            allowMultipleSelection
            getItemKey={(item) => item.key}
            data={stuff}
            selectedItems={selectedStuff}
            setSelectedItems={(items) => setSelectedStuff(items)}
            renderItem={(item) => {
              const { key } = item.item;
              const { isActive, onClick } = item;
              return (
                <PickerItem key={key} $isActive={isActive} onClick={onClick}>
                  {key}
                </PickerItem>
              );
            }}
          />

        </PickerWrapper>
      </StoryWrapper>
    );
  },
};


const PickerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 3px;
`;

const PickerItem = styled.div<{ $isActive: boolean }>`
  background-color: ${({ $isActive, theme }) => ($isActive ? theme.colors.secondary : theme.colors.gray)};
  border: 1px solid ${({ $isActive, theme }) => ($isActive ? theme.colors.primary : 'transparent')};
  border-radius: 2px;
  padding: 11px 12px;
  display: flex;
  width: fit-content;
  justify-content: center;
  align-items: center;
  opacity: 1;
  cursor: pointer;
  user-select: none;
  &:hover,
  &:focus {
    cursor: pointer;
  }
  color: ${({ $isActive }) => ($isActive ? 'white' : '#4B5768')};
`;
