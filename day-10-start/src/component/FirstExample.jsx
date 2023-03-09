import { useEffect, useState } from "react";
function FirstExample() {
    const [resourceType, setResourceType] = useState("");
    const [items, setItems] = useState([]);
    useEffect(() => {
        console.log("Change Detected");
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then((response) => response.json())
            .then((jsonData) => setItems(jsonData));
    }, [resourceType]);
    return (
        <>
            <div className="wrapper">
                <button onClick={() => setResourceType("albums")}>
                    Albums
                </button>
                <button onClick={() => setResourceType("photos")}>
                    Photos
                </button>
                <button
                    onClick={() => setResourceType("todos")}
                    className="retardedPretty"
                >
                    Todos
                </button>
            </div>
            <h1>{resourceType}</h1>
            {items.map((item) => {
                console.log(item);
                return (
                    <>
                        <hr />
                        <ul>
                            <li key={item.id}>
                                <h3>{item.title}</h3>
                                <img src={item.url} alt="no photo loaded" />
                            </li>
                        </ul>
                        <hr />
                    </>
                );
            })}
        </>
    );
}

export default FirstExample;
