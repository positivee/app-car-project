import React from "react";
import Car from "./Car";
//renders list of cars
export default function Cars({ cars }) {
  return cars.map((car, index) => {
    return (
      <div key={index}>
        {car.brand} <Car car={car} />
      </div>
    );
  });
}
