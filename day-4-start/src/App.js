<<<<<<< HEAD
import "./App.css";

const products = [
    { id: 525435245, name: "Alfa wolf", price: "69.69" },
    { id: 123532523, name: "Beta fox", price: "120" },
    { id: 276745755, name: "Charlie the Elephant", price: "69.96" },
    { id: 457474753, name: "Dickens", price: "69.96" },
];

function App() {
    const productList = products.map((name, price, id, index) => {
        if (index >= 2) {
            return null;
        }
        return (
            <li key={id} className="product-listing">
                <span>{name}</span>
                <span>{price}kr</span>
            </li>
        );
    });
    return (
        <div className="App">
            <ul>{productList}</ul>
        </div>
    );
=======
import './App.css';

const products = [
  {id: 83742398, name: "Milk", price: "300"}, // 0
  {id: 4732347, name: "Candy", price: "200"}, // 1
  {id: 3424, name: "Chocolate", price: "100"}, // 2
  {id: 6565, name: "Spray", price: "900"}, // 3
]

function App() {

  const productList = products.map(({name, price, id}, index) => {
      if (index >= 2) {
        return null
      }
      return (
        <li key={id}>
          <span>Name: {name}</span>
          <span>Price: {price}</span>
        </li>
      )
    }
  )

  return (
    <div className="App">
      <ul>
        {productList}
      </ul>
    </div>
  );
>>>>>>> d4b9f92ae7f4334f8501ec0968d3f5e5d7cb83cd
}

export default App;
