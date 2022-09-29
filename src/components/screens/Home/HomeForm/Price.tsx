import React from "react";
import SubmitButton from "../../../UI/button/SubmitButton";
import Loader from "../../../UI/Loader/Loader";

interface IPrices {
  price: string;
  contribution: string;
  month: string;
  setAllPrice: (value: any) => void;
  setMonthPrice: (value: any) => void;
  isDisabled: boolean;
}

const Price: React.FC<IPrices> = ({
  price,
  contribution,
  month,
  setAllPrice,
  setMonthPrice,
  isDisabled,
}) => {
  const bid = 0.035;
  const monthPay = Math.round(
    (+price - (+price * +contribution) / 100) *
      ((bid * Math.pow(1 + bid, +month)) / (Math.pow(1 + bid, +month) - 1))
  );
  const allPay = Math.round(+contribution + +month * monthPay);
  setAllPrice(allPay);
  setMonthPrice(monthPay);
  return (
    <div className="price">
      <div className="price-items">
        <div className="price-item">
          <p className="price-title">Сумма договора лизинга</p>
          <p className="prices">
            {allPay && allPay !== Infinity ? allPay : 0}₽
          </p>
        </div>
        <div className="price-item">
          <p className="price-title">Ежемесячный платеж от</p>
          <p className="prices">
            {monthPay && monthPay !== Infinity ? monthPay : 0} ₽
          </p>
        </div>
        <div className="price-item prices-btn">
          <SubmitButton isDisabled={isDisabled} className="btn">
            {!isDisabled ? (
              "Оставить заявку"
            ) : (
                <Loader />
            )}
          </SubmitButton>
        </div>
      </div>
    </div>
  );
};

export default Price;
