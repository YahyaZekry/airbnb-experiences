import React from "react";
import photogrid from "../assets/group.png";
export default function Hero() {
  return (
    <div className="hero">
      <img src={photogrid} alt="" className="hero--photo" />
      <section className="hero--text">
        <h1 className="hero--title">Online Experiences</h1>
        <p className="hero--desc">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </section>
    </div>
  );
}
