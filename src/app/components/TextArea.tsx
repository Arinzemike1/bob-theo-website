import { ChangeEvent } from "react";
import { FormikProps } from "formik";

interface TextAreaProps {
  label?: string;
  className?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  readOnly?: boolean;
  maxLength?: number | undefined;
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  formik?: FormikProps<any>;
  numberOnly?: boolean;
}

const TextArea = ({
  onChange,
  label,
  className,
  name,
  value,
  placeholder,
  readOnly,
  maxLength,
  formik,
  ...restProps
}: TextAreaProps) => {
  const errorMessage = formik && name && formik.errors[name];
  const hasError = errorMessage && formik.touched[name];

  return (
    <div>
      <div className="pb-6">
        {label && (
          <label className="flex justify-start pb-2 font-semibold text-[14px]/[13px] tracking-tight">
            {label}
          </label>
        )}
        <textarea
          className={`rounded-xl bg-transparent h-24 ${
            hasError ? "border border-danger" : "border-all"
          } box-border placeholder:text-sm placeholder:tracking-normal outline-none focus:border-2 focus:border-black px-5 py-4 w-full ${className}`}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          maxLength={maxLength}
          readOnly={readOnly}
          {...restProps}
        ></textarea>
        <div>
          {hasError && (
            <span className="text-danger inline-block text-sm font-semibold">
              {typeof errorMessage === "string" && errorMessage}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default TextArea;
