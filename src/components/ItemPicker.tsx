import HeadlessItemPicker, { HeadlessItemPickerProps, RenderItemProps } from './HeadlessItemPicker';
import styled from 'styled-components';

interface ItemPickerProps<T> extends Omit<HeadlessItemPickerProps<T>, 'renderItem'> {
  getItemRenderString: (item: T) => string;
}

function ItemPicker<T>(props: ItemPickerProps<T>) {
  const renderItem = (item: RenderItemProps<T>) => {
    const { isActive, onClick } = item;

    return (
      <PickerItem
        className={props.className}
        key={props.getItemKey(item.item)}
        $isActive={isActive}
        onClick={onClick}
      >
        <PickerItemText>{props.getItemRenderString(item.item)}</PickerItemText>
      </PickerItem>
    );
  };

  return (
    <PickerWrapper>
      <HeadlessItemPicker {...props} renderItem={renderItem} />
    </PickerWrapper>
  );
}

const PickerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const PickerItem = styled.div<{ $isActive: boolean }>`
  background-color: ${({ $isActive, theme }) => ($isActive ? theme.colors.primary : 'white')};
  border: 1px solid ${({ $isActive, theme }) => ($isActive ? theme.colors.primary : 'transparent')};
  border-radius: 200px;
  padding: 11px 12px;
  display: flex;
  width: fit-content;
  justify-content: center;
  align-items: center;
  opacity: 1;
  gap: 6px;
  cursor: pointer;
  user-select: none;
  &:hover,
  &:focus {
    cursor: pointer;
  }
  color: ${({ $isActive }) => ($isActive ? '#1B4C28' : '#4B5768')};
`;

const PickerItemText = styled.div`
  font-size: 1.4rem;
`;

export default ItemPicker;
