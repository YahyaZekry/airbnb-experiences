import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <div className="card">
        <Card
        img="./images/Katie-Zaferes.png"
        rating={5}
        country="USA"
        name="Life lessons with Katie Zaferes"
        price={139}

         />
        <Card 
        img="./images/wedding-photography.png"
        rating={4.5}
        country="UK"
        name="Learn wedding photography"
        price={159}
         />
        <Card
        img="./images/mountain-bike.png"
        rating={5}     
        country="Canada"        
        name="Group Mountain Biking"
        price={179}
         />
        <Card
        img="./images/wedding-photography.png"
        rating={4.5}
        country="UK"
        name="Learn wedding photography"
        price={159}
         />
      </div>
    </div>
  );
}

export default App;
