import React from "react";
import AutoForm from "./FormInputs/AutoForm";
import ContributionForm from "./FormInputs/ContributionForm";
import MonthForm from "./FormInputs/MonthForm";

interface IInputForm {
  price: string;
  setPrice: (value: any) => void;
  setContribution: (value: any) => void;
  setMonth: (value: any) => void;
  isDisabled: boolean;
}

const InputForm: React.FC<IInputForm> = ({
  price,
  setPrice,
  setContribution,
  setMonth,
  isDisabled
}) => {
  return (
    <div>
      <div className="input-name">
        <p>Стоимость автомобиля</p>
        <AutoForm setPrice={setPrice} isDisabled={isDisabled}/>
      </div>
      <div className="input-name">
        <p>Первоначальный взнос</p>
        <ContributionForm price={price} setContributionAuto={setContribution} isDisabled={isDisabled} />
      </div>
      <div className="input-name">
        <p>Срок лизинга</p>
        <MonthForm setMonthAuto={setMonth} isDisabled={isDisabled} />
      </div>
    </div>
  );
};

export default InputForm;
