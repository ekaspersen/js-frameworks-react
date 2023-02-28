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
}

export default App;
