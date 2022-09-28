import { Field, useField } from "formik";
import React from "react";

const InputField = ({ name,label, id, type = "text", ...otherProps }) => {
  const [field, meta] = useField(name);

  const textFieldProps = {
    ...field,
    ...otherProps,
  };

  if (meta.touched && meta.error) {
    textFieldProps.error = true;
    textFieldProps.helperText = meta.error;
  }
  return (
    <>
      <label className="block mb-1 text-sm text-gray-600" htmlFor={name}>
        {label}
      </label>
      <Field
        className="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5"
        type={type}
        id={name}
        name={name}
      />
    </>
  );
};

export default InputField;
