import InputField from "./fields/InputField";
import RadioGroupOption from "./fields/RadioGroupOption";
import TextareaField from "./fields/TextareaField";

const FormikControl = ({ control, ...otherProps }) => {
  switch (control) {
    case "input":
      return <InputField {...otherProps} />;
    case "textarea":
      return <TextareaField {...otherProps} />;
    case "radioGroupOption":
      return <RadioGroupOption {...otherProps} />;
    default:
      return null;
  }
};
export default FormikControl;
