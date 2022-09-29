import React from "react";
import HomeForm from "./HomeForm/HomeForm";

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="home-title">
        <h1 className="title">Рассчитайте стоимость <br/>автомобиля в лизинг</h1>
      </div>
      <HomeForm />
    </div>
  );
};

export default Home;
