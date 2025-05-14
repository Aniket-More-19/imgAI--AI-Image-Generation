import { ChangeEventHandler } from "react";

type inputType = {
  name: string;
  className: string;
  value: string;
  placeholder: string;
  label?: string;
  isIcon?: boolean;
  iconImage?: React.ReactElement;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const CustomInput: React.FC<inputType> = ({
  name,
  className,
  value,
  placeholder,
  label,
  isIcon,
  iconImage,
  onChange,
}) => {
  return (
    <>
      {label && (
        <span className="ms-1 text-gray-700 font-semibold">{label}</span>
      )}

      <div className={` ${label && "mt-1"} ${className}`}>
        <div className="relative">
          {isIcon && (
            <div className="w-7 h-7 absolute mt-2 ms-3 align-center justify-center">
              {iconImage}
            </div>
          )}

          <input
            value={value}
            name={name}
            type="text"
            className={`border-1 rounded-md focus:border-2 focus:border-blue-600 py-2 px-4 text-lg w-full outline-none ${
              isIcon && iconImage && "pl-14"
            } `}
            placeholder={placeholder}
            onChange={onChange}
          />
        </div>
      </div>
    </>
  );
};

export default CustomInput;
