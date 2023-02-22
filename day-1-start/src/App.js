import "./App.css";
import Heading from "./components/Heading";
import List from "./components/List";
import Paragraph from "./components/Paragraph";

function App() {
    return (
        <div className="App container">
            <Heading />
            <Paragraph />
            <Paragraph />
            <Paragraph />
            <List />
        </div>
    );
}

export default App;
