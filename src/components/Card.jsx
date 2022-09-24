import React from "react";
import Sold from "../assets/sold-out.png";
import Star from "../assets/star.png";

export default function Card(props) {
  console.log(props);
  return (
    <div>
      <div className="card--image">
        <img src={props.img} alt={props.name} className="profile-picture" />
        <img src={Sold} alt="SOLD OUT" className="card--availablty" />
      </div>
      <div className="card--stats">
        <img src={Star} alt="star" className="card--star" />
        <span className="gray">({props.rating}) • </span>
        <span className="gray">{props.country}</span>
      </div>
      <div className="card--text">
        <p>{props.name}</p>
        <p>
          <span className="bold">From {props.price}</span> / Person
        </p>
      </div>
    </div>
  );
}
