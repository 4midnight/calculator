import React from "react";

interface ISubmitButton {
  children: React.ReactNode | string;
  className: string;
  onClick?: () => void;
  isDisabled: boolean;
}

const SubmitButton: React.FC<ISubmitButton> = ({
  children,
  className,
  onClick,
  isDisabled
}) => {
  return (
    <button type="submit" className={className} onClick={onClick} disabled={isDisabled}>
      {children}
    </button>
  );
};

export default SubmitButton;
