import { ChangeEvent } from "react";
import { FormikProps } from "formik";

interface InputProps {
  type: string;
  label?: string;
  id?: string;
  className?: string;
  name?: string;
  value?: string;
  maxLength?: number;
  defaultValue?: string;
  placeholder?: string;
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  formik?: FormikProps<any>;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  type,
  label,
  id,
  className,
  name,
  value,
  maxLength,
  defaultValue,
  placeholder,
  formik,
  onChange,
  ...restProps
}: InputProps) => {
  const errorMessage = formik && name && formik.errors[name];
  const hasError = errorMessage && formik.touched[name];

  return (
    <div className={`${label && "pb-6"}`}>
      {label && (
        <label className="flex justify-start pb-2 font-semibold text-[14px]/[13px] tracking-tight">
          {label}
        </label>
      )}

      <input
        className={`rounded-xl bg-transparent box-border placeholder:text-sm placeholder:tracking-normal outline-none focus:border-2 focus:border-black px-5 h-[50px] w-full ${
          hasError ? "border border-danger" : "border-all"
        } ${className}`}
        id={id}
        type={type}
        name={name}
        value={value}
        maxLength={maxLength}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={onChange}
        {...restProps}
      />
      <div>
        {hasError && (
          <span className="text-danger inline-block text-sm font-semibold pt-1">
            {typeof errorMessage === "string" && errorMessage}
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;
