/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./HeroCard.css";

const HeroCard = ({ hero }) => {
  const [rating, setRating] = useState(0); // Хранение текущей оценки

  const handleStarClick = (index) => {
    setRating(index + 1); // Установка рейтинга (1-based индекс)
  };

  return (
    <div className="hero-card">
      <img src={hero.url} alt={hero.name} className="hero-img" />
      <div className="hero-info">
        <h3>{hero.name}</h3>
        <p>Вселенная: {hero.universe}</p>
        <p>Альтерэго: {hero.alterego}</p>
        <p>Род занятий: {hero.occupation}</p>
        <p>Друзья: {hero.friends}</p>
        <p>Суперспособности: {hero.superpowers}</p>
        <p>{hero.info}</p>
        {/* Рейтинг */}
        <div className="rating">
          <p>Оценка:</p>
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={`star ${index < rating ? "filled" : ""}`}
              onClick={() => handleStarClick(index)} // Обработка клика по звезде
            >
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
