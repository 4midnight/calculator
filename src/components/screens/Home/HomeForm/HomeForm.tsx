import axios from "axios";
import React from "react";
import InputForm from "./InputForm";
import Price from "./Price";

const HomeForm: React.FC = () => {
  const [isError, setIsError] = React.useState("");
  const [isDisabled, setIsDisabled] = React.useState(false);
  const [price, setPrice] = React.useState("");
  const [contribution, setContribution] = React.useState("");
  const [month, setMonth] = React.useState("");
  const [allPrice, setAllPrice] = React.useState("");
  const [monthPrice, setMonthPrice] = React.useState("");

  const onSubmitHandrel = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsDisabled(true);

    if (price === "" || contribution === "" || month === "") {
      setIsDisabled(false);
      setIsError("Error! One of the fields is empty");
      return;
    }
    setIsError("");

    const body = {
      price,
      contribution: contribution + "%",
      months: month,
      allPrice,
      monthPrice,
    };

    console.log(JSON.stringify(body));
    axios({
      method: "post",
      url: "https://eoj3r7f3r4ef6v4.m.pipedream.net",
      data: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        setIsDisabled(false);
      })
      .catch((err) => {
        console.log(err);
        setIsDisabled(false);
        alert(`Error`);
      });
  };

  return (
    <form action="" className="form" onSubmit={onSubmitHandrel}>
      {!!isError && (
        <div style={{ color: "red", fontSize: "32px" }}>{isError}</div>
      )}
      <InputForm
        setPrice={setPrice}
        price={price}
        setContribution={setContribution}
        setMonth={setMonth}
        isDisabled={isDisabled}
      />
      <Price
        price={price}
        contribution={contribution}
        month={month}
        setAllPrice={setAllPrice}
        setMonthPrice={setMonthPrice}
        isDisabled={isDisabled}
      />
    </form>
  );
};

export default HomeForm;
