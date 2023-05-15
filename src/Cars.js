import React from "react";

//renders list of cars
export default function Cars({ cars }) {
  return cars.map((car, index) => {
    return (
      <div key={index}>
        {car.models.map((model, index) => (
          <div key={index}>
            {car.brand} {model}
          </div>
        ))}
      </div>
    );
  });
}
