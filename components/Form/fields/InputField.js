import { Field, useField } from "formik";
import React from "react";

const InputField = ({ name,placeholder, label, id, type = "text", ...otherProps }) => {
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
      <label
        // className="block mb-1 text-sm text-gray-600"
        className="block"
        htmlFor={name}
      >
        {label}
      </label>
      <Field
        // className="rounded-lg shadow-sm border-gray-200 w-full text-sm p-2.5"
        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
        type={type}
        placeholder={placeholder}
        id={name}
        name={name}
      />
    </>
  );
};

export default InputField;
