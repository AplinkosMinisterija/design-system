
export interface RenderItemProps<T> {
  item: T;
  isActive: boolean;
  index: number;
  onClick: () => void;
}

export interface HeadlessItemPickerProps<T> {
  className?: string;
  data: Array<T>;
  selectedItems: Array<T>;
  setSelectedItems: (items: Array<T>) => void;
  renderItem: (props: RenderItemProps<T>) => React.ReactNode;
  getItemKey: (item: T) => string | number;
  allowMultipleSelection?: boolean;
}

function HeadlessItemPicker<T>({
  data,
  renderItem,
  selectedItems = [],
  setSelectedItems,
  allowMultipleSelection = false,
  getItemKey,
}: HeadlessItemPickerProps<T>) {
  const onItemPress = (item: T) => {
    if (allowMultipleSelection) {
      const foundSelectedIndex = selectedItems.findIndex((selected) => {
        return getItemKey(selected) === getItemKey(item);
      });
      const newSelected = [...selectedItems];
      if (foundSelectedIndex !== -1) {
        newSelected.splice(foundSelectedIndex, 1);
        setSelectedItems(newSelected);
      } else {
        newSelected.push(item);
        setSelectedItems(newSelected);
      }
    } else {
      setSelectedItems([item]);
    }
  };

  const renderPickerItem = ({ item, index }) => {
    const isActive = !!selectedItems.find((selected) => getItemKey(selected) === getItemKey(item));

    return renderItem({ item, isActive, index, onClick: () => onItemPress(item) });
  };

  return <>{data.map((item, index) => renderPickerItem({ item, index }))}</>;
}

export default HeadlessItemPicker;
