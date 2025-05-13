type ButtonType = {
  children: React.ReactNode;
  className: string;
  onClick: Function;
};

const CustomButton: React.FC<ButtonType> = ({
  children,
  className,
  onClick,
}) => {
  const btnClass =
    "py-2 px-4 font-bold rounded-md bg-indigo-500 text-white hover:bg-blue-700 outline-none";

  return (
    <button className={`${btnClass} ${className}`} onClick={() => onClick}>
      {children}
    </button>
  );
};

export default CustomButton;
