import React from "react";
import { bgSize } from "../../../../../assets/bgSize";
import Input from "../../../../UI/input/Input";

interface IAutoFomt {
  setPrice: (value: any) => void;
  isDisabled: boolean;
}

const AutoForm: React.FC<IAutoFomt> = ({ setPrice, isDisabled }) => {
  const [priceAuto, setPriceAuto] = React.useState("");
  const [priceSize, setPriceSize] = React.useState("");
  const priceOncChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    setPrice(target.value);
    setPriceAuto(target.value);
    setPriceSize(bgSize(target));
  };
  return (
    <label className="input-block">
      <Input
        isDisabled={isDisabled}
        id="price"
        min="1000000"
        max="6000000"
        placeholder="Стоимость автомобиля"
        value={priceAuto}
        onChange={priceOncChangeHandler}
        size={priceSize}
      />

      {!!priceAuto && (
        <div className="input-icons">
          <p>₽</p>
        </div>
      )}
    </label>
  );
};

export default AutoForm;
