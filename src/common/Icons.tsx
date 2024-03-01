import {
  MdOutlineVisibility,
  MdOutlineVisibilityOff,
} from 'react-icons/md';
import {FiArrowLeft, FiMenu} from "react-icons/fi";
import {FaChevronRight} from "react-icons/fa6";

export enum IconName {
  visibleOn = 'visibleOn',
  visibleOff = 'visibleOff',
  logout = 'logout',
  back = 'back',
  burger ='burger',
  right= 'right',
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
    case IconName.back:
      return <FiArrowLeft className={className} />;
    case IconName.burger:
      return <FiMenu className={className} />;
    case IconName.right:
      return <FaChevronRight className={className} />;
    case IconName.logout:
      return (
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={className}
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" y1="12" x2="9" y2="12"></line>
          </svg>
      );
    default:
      return null;
  }
};

export default Icon;
