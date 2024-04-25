import { pizzaData as pizzas } from "../data";

export default function MenuItem() {
  return (
    <div>
      {pizzas.map((pizza) => (
        <div>
          <img src={pizza.photoName} alt={pizza.name}/>
          <h3>{pizza.name}</h3>
          <p>{pizza.ingredients}</p>
        </div>
      ))}
    </div>
  )
}
