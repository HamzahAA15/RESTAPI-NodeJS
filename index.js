const express = require("express");
const app = express();
const port = 8000;
const cars = require("./data");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api/cars", (req, res) => {
  res.status(200).json(cars);
});

app.get("/api/cars/:id", (req, res) => {
  const car = cars.find((i) => i.id === Number(req.params.id));
  res.status(200).json(car);
});

app.post("/api/cars", (req, res) => {
  const { name, type } = req.body;

  //   const lastId = cars[cars.length - 1].id;
  const newId = cars.length + 1;
  const car = {
    id: newId,
    name,
    type,
  };
  cars.push(car);
  res.status(201).json(car);
});

app.put("/api/cars/:id", (req, res) => {
  const { name, type } = req.body;

  const indexCar = cars.findIndex((e) => e.id === Number(req.params.id));

  cars[indexCar] = {
    id: Number(req.params.id),
    name,
    type,
  };
  res.status(200).json(cars[indexCar]);
});

app.delete("/api/cars/:id", (req, res) => {
  const indexCar = cars.findIndex((e) => e.id === Number(req.params.id));
  cars.splice(indexCar, 1);
  res.status(200).json({ message: `car with id ${indexCar + 1} is deleted` });
});

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});

// data.push({
//     id:
// })
