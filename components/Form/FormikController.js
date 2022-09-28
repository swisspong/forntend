import InputField from "./fields/InputField";
import RadioGroupOption from "./fields/RadioGroupOption";

const FormikControl = ({ control, ...otherProps }) => {
  switch (control) {
    case "input":
      return <InputField {...otherProps} />;
    case "radioGroupOption":
      return <RadioGroupOption {...otherProps} />;
    default:
      return null;
  }
};
export default FormikControl;
