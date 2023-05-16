import React, { useState } from "react";

//renders list of cars
export default function Cars({ cars }) {
  const [expandBrands, setExpandedBrands] = useState([]);

  const handlButtonClick = (brand) => {
    if (expandBrands.includes(brand)) {
      setExpandedBrands((prev) => prev.filter((item) => item !== brand));
    } else {
      setExpandedBrands((prev) => [...prev, brand]);
    }
  };

  return cars.map((car, index) => {
    return (
      <div key={index}>
        {car.brand}{" "}
        <button onClick={() => handlButtonClick(car.brand)}>
          {expandBrands.includes(car.brand) ? "Zwiń modele" : "Rozwiń modele"}
        </button>
        <ul>
          {expandBrands.includes(car.brand) &&
            car.models.map((model, index) => (
              <li key={index}>
                {car.brand} {model}
              </li>
            ))}
        </ul>
      </div>
    );
  });
}
