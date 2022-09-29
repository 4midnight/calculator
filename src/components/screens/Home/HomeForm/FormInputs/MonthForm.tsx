import React from "react";
import { bgSize } from "../../../../../assets/bgSize";
import Input from "../../../../UI/input/Input";

interface IMonthForm {
  setMonthAuto: (value: any) => void;
  isDisabled: boolean;
}

const MonthForm: React.FC<IMonthForm> = ({ setMonthAuto, isDisabled }) => {
  const [month, setMonth] = React.useState("");

  const [monthSize, setMonthSize] = React.useState("");

  const monthOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    setMonth(target.value);
    setMonthSize(bgSize(target));
    setMonthAuto(target.value);
  };
  return (
    <label className="input-block contribution">
      <Input
        isDisabled={isDisabled}
        id="month"
        min="1"
        max="60"
        placeholder="Срок лизинга"
        value={month}
        onChange={monthOnChangeHandler}
        size={monthSize}
      />

      {!!month && <div className="input-icons month">мес.</div>}
    </label>
  );
};

export default MonthForm;
