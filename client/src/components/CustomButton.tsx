import { MouseEventHandler } from "react";

type ButtonType = {
  children: React.ReactNode;
  type: "button" | "submit";
  className: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const CustomButton: React.FC<ButtonType> = ({
  children,
  type,
  className,
  onClick,
}) => {
  const btnClass =
    "py-2 px-4 font-bold rounded-md bg-indigo-500 text-white hover:bg-blue-700 outline-none";

  return (
    <button
      type={type}
      className={`${btnClass} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
