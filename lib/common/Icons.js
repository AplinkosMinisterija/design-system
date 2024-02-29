import { jsx as _jsx } from "react/jsx-runtime";
import { MdOutlineVisibility, MdOutlineVisibilityOff, } from 'react-icons/md';
var IconName;
(function (IconName) {
    IconName["visibleOn"] = "visibleOn";
    IconName["visibleOff"] = "visibleOff";
})(IconName || (IconName = {}));
const Icon = ({ name, className }) => {
    switch (name) {
        case IconName.visibleOn:
            return _jsx(MdOutlineVisibility, { className: className });
        case IconName.visibleOff:
            return _jsx(MdOutlineVisibilityOff, { className: className });
        default:
            return null;
    }
};
export default Icon;
