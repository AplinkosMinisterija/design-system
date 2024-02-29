import {
  MdOutlineVisibility,
  MdOutlineVisibilityOff,
} from 'react-icons/md';

enum IconName {
  visibleOn = 'visibleOn',
  visibleOff = 'visibleOff',
}

export interface IconProps {
  name: IconName | string;
  className?: string;
}

const Icon = ({ name, className }: IconProps) => {
  switch (name) {
    case IconName.visibleOn:
      return <MdOutlineVisibility className={className} />;
    case IconName.visibleOff:
      return <MdOutlineVisibilityOff className={className} />;
    default:
      return null;
  }
};

export default Icon;
