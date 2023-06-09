import carList from "./car-list.json";
import Cars from "./Cars";
import { useState, useMemo } from "react";
function App() {
  const [findCar, setFindCar] = useState("");

  //handle form change
  const handleChange = (e) => {
    setFindCar(e.target.value);
  };

  //find car based on state in input field
  const searchCar = useMemo(() => {
    const filtered = carList.map((brand) => {
      const filteredModels = brand.models.filter((model) => {
        if (
          (brand.brand + " " + model)
            .toLowerCase()
            .includes(findCar.toLowerCase())
        )
          return model;
        else return null;
      });

      if (
        filteredModels.length === 0 &&
        brand.brand.toLowerCase().includes(findCar.toLowerCase())
      ) {
        return { brand: brand.brand, models: brand.models };
      } else if (filteredModels.length >= 1) {
        return { brand: brand.brand, models: filteredModels };
      } else {
        return null;
      }
    });
    return filtered.filter((item) => item !== null);
  }, [findCar]);

  return (
    <div className="App">
      <input type="text" value={findCar} onChange={handleChange}></input>
      <Cars cars={searchCar} />
    </div>
  );
}

export default App;
