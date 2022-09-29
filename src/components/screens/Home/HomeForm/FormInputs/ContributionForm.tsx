import React from "react";
import { bgSize } from "../../../../../assets/bgSize";

interface IContributionForm {
  price: string;
  setContributionAuto: (value: any) => void;
  isDisabled: boolean;
}

const ContributionForm: React.FC<IContributionForm> = ({
  price,
  setContributionAuto,
  isDisabled,
}) => {
  const [contribution, setContribution] = React.useState("");
  const [contributionSize, setContributionSize] = React.useState("");
  const contributionPrice = Math.round(
    (+price * +contribution) / 100
  ).toString();

  const contributionOnChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const target = e.target;
    setContribution(target.value);
    setContributionSize(bgSize(target));
    setContributionAuto(target.value);
  };

  return (
    <>
      {isDisabled ? (
        <label className="input-block">
          <div>
            <input
              type="text"
              className="input"
              placeholder="Первоначальный взнос"
              value={!+contributionPrice ? "" : contributionPrice}
              onChange={contributionOnChangeHandler}
              disabled
            />
            <input
              className="input-range"
              style={{ backgroundSize: `${contributionSize}` }}
              type="range"
              min={10}
              max={60}
              value={!contribution ? "10" : contribution}
              onChange={contributionOnChangeHandler}
              disabled
            />
          </div>
          <div className="input-icons contribution">
            <input
              type="text"
              maxLength={2}
              value={+contribution > 60 ? 60 : contribution}
              onChange={contributionOnChangeHandler}
              placeholder="%"
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              disabled
            />
          </div>
        </label>
      ) : (
        <label className="input-block">
          <div>
            <input
              type="text"
              className="input"
              placeholder="Первоначальный взнос"
              value={!+contributionPrice ? "" : contributionPrice}
              onChange={contributionOnChangeHandler}
              onKeyPress={(event) => {
                if (!/[]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            />
            <input
              className="input-range"
              style={{ backgroundSize: `${contributionSize}` }}
              type="range"
              min={10}
              max={60}
              value={!contribution ? "1" : contribution}
              onChange={contributionOnChangeHandler}
            />
          </div>
          <div className="input-icons contribution">
            <input
              type="text"
              maxLength={2}
              min={10}
              max={60}
              value={+contribution > 60 ? 60 : contribution}
              onChange={contributionOnChangeHandler}
              placeholder="%"
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            />
          </div>
        </label>
      )}
    </>
  );
};

export default ContributionForm;
