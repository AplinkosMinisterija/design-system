import { jsx as _jsx } from "react/jsx-runtime";
import FieldWrapper from '../common/FieldWrapper';
import TextFieldInput from '../common/TextFieldInput';
const TextField = ({ value, name, error, showError = true, readOnly = false, label, className, leftIcon, rightIcon, padding, onChange, subLabel, placeholder, bottomLabel, type, disabled, height, secondLabel, onInputClick, }) => {
    return (_jsx(FieldWrapper, { padding: padding, className: className, label: label, subLabel: subLabel, secondLabel: secondLabel, error: error, showError: showError, bottomLabel: bottomLabel, children: _jsx(TextFieldInput, { value: value, name: name, error: error, leftIcon: leftIcon, rightIcon: rightIcon, onChange: onChange, disabled: disabled, height: height, readOnly: readOnly, onInputClick: onInputClick, placeholder: placeholder, type: type }) }));
};
export default TextField;
