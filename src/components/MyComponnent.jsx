import React, { useState } from 'react';

const MyComponnent = () => {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState();
  const [carModel, setCarModel] = useState();

  const handleAddCar = () => {
    const newCar = { year: carYear, make: carMake, model: carModel };

    setCars((c) => [...c, newCar]);

    setCarYear(new Date().getFullYear());
    setCarMake('');
    setCarModel('');
  };

  const handleRemoveCar = (index) => {
    setCars((c) => c.filter((_, i) => i !== index));
  };
  const handleYearChnage = (event) => {
    setCarYear(event.target.value);
  };

  const handleMakeChnage = (event) => {
    setCarMake(event.target.value);
  };
  const handleModelChnage = (event) => {
    setCarModel(event.target.value);
  };

  return (
    <div id='container'>
      <h2 id='myh1'>List of Car objects</h2>
      <ol>
        {cars.map((car, index) => (
          <li key={index}>
            {car.year} {car.make} {car.model}
            <button onClick={() => handleRemoveCar(index)}>click</button>
          </li>
        ))}
      </ol>
      <input type='number' value={carYear} onChange={handleYearChnage} /> <br />
      <input
        type='text'
        value={carMake}
        placeholder='Enter car make '
        onChange={handleMakeChnage}
      />{' '}
      <br />
      <input
        type='text'
        value={carModel}
        placeholder='Enter car Model'
        onChange={handleModelChnage}
      />{' '}
      <br />
      <button id='btn' onClick={handleAddCar}>
        Add Food
      </button>
    </div>
  );
};

export default MyComponnent;
