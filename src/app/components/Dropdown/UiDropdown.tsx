import { Dropdown, DropdownProps } from "primereact/dropdown";
import { CSSProperties } from "react";

interface FieldProps {
  fieldClassName?: string;
  fieldStyle?: String;
  label?: string;
  labelClassName?: string;
  labelStyle?: CSSProperties;
  floatLabel?: boolean;
  error?: string;
  errorClassName?: string;
  errorStyle?: CSSProperties;
  touched?: boolean;
}

const UiDropdown = ({
  fieldClassName,
  fieldStyle,
  label,
  labelClassName,
  labelStyle,
  floatLabel,
  error,
  errorClassName,
  errorStyle,
  touched,
  inputId,
  ...dropdownProps
}: DropdownProps & FieldProps) => {
  const labelTemplate = (
    <label className={labelClassName} style={labelStyle} htmlFor={inputId}>
      {label}
    </label>
  );

  return (
    <>
      <div
        className={`flex flex-col gap-1 ${
          floatLabel ? "p-float-label my-6" : ""
        } ${fieldClassName ?? ""}`}
      >
        {!floatLabel && labelTemplate}
        <Dropdown inputId={inputId} {...dropdownProps} />
        {floatLabel && labelTemplate}

        {touched && error && (
          <small
            className={`p-error ${floatLabel ? "absolute -bottom-5" : ""} ${
              errorClassName ?? ""
            }`}
            style={errorStyle}
          >
            {error}
          </small>
        )}
      </div>
    </>
  );
};

export default UiDropdown;
