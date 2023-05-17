import React, { useState } from "react";

export default function Car({ car }) {
  const [expandBrand, setExpandedBrand] = useState(false);

  return (
    <>
      <button onClick={() => setExpandedBrand((prev) => !prev)}>
        {expandBrand ? "Zwiń modele" : "Rozwiń modele"}
      </button>

      <ul>
        {expandBrand &&
          car.models.map((model, index) => (
            <li key={index}>
              {car.brand} {model}
            </li>
          ))}
      </ul>
    </>
  );
}
