import React from "react";
import "./ItemsCard.css";

const ItemsCard = ({ cardList }) => {
  return (
<div className="grid-container">
      {cardList.map((card, index) => (
        <div className="grid-item" key={index}>
          <figure>
            <img src={card.imgSrc} alt={card.title} />
            <figcaption>{card.title}</figcaption>
            <p>{card.description}</p>
          </figure>
        </div>
      ))}
    </div>
  );
};
export default ItemsCard;