import carList from "./car-list.json";
import { useEffect, useState } from "react";
function App() {
  const [findCar, setFindCar] = useState("");
  const [searchResult, setSearchResult] = useState(carList);

  //renders all cars
  const rednerCars = (list) => {
    return list.map((car, index) => {
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
  };

  //handle form change
  const handleChange = (e) => {
    setFindCar(e.target.value);
  };

  //find car based on state in input field
  const searchCar = (searchedCar) => {
    const filtered = carList.map((brand) => {
      const filteredModels = brand.models.filter((model) => {
        if (
          (brand.brand + " " + model)
            .toLowerCase()
            .includes(searchedCar.toLowerCase())
        )
          return model;
        else return null;
      });

      if (
        filteredModels.length === 0 &&
        brand.brand.toLowerCase().includes(searchedCar.toLowerCase())
      ) {
        return { brand: brand.brand, models: brand.models };
      } else if (filteredModels.length >= 1) {
        return { brand: brand.brand, models: filteredModels };
      } else {
        return null;
      }
    });
    setSearchResult(filtered.filter((item) => item !== null));
  };

  //run search on searchbox change
  useEffect(() => {
    searchCar(findCar);
  }, [findCar]);

  return (
    <div className="App">
      <input type="text" value={findCar} onChange={handleChange}></input>
      {rednerCars(searchResult)}
    </div>
  );
}

export default App;
