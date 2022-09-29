import React from "react";

interface IInputProps {
  placeholder: string;
  min: string;
  max: string;
  value: string;
  size: string;
  id: string;
  isDisabled: boolean;
  onChange?: (value: any) => void;
}

const Input: React.FC<IInputProps> = ({
  placeholder,
  min,
  max,
  onChange,
  value,
  size,
  id,
  isDisabled
}) => {
  
  return (
    <div>
            
      <input
        type="text"
        className={`input`}
        id={id}
        placeholder={placeholder}
        min={min}
        max={max}
        maxLength={max.split("").length}
        value={+value > +max? max: value }
        onChange={onChange}
        onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}
        disabled={isDisabled}
      />
      <input
        className={`input-range`}
        style={{backgroundSize: `${size}`}}
        type="range"
        min={min}
        max={max}
        value={!value ? "1" : value}
        onChange={onChange}
        disabled={isDisabled}
      />
    </div>
  );
};

export default Input;
