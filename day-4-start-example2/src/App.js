import "./App.css";

function App() {
    let isLoggedIn = true;
    const profileComponent = (
        <div>
            <h1>Profile</h1>
            <ul>
                <li>Name: Jack</li>
                <li>Age: 32</li>
                <li>Phone: 91562435</li>
            </ul>
        </div>
    );
    const signInComponent = <div>Login Form</div>;
    return (
        <div className="App">
            <div>{isLoggedIn ? profileComponent : signInComponent}</div>
        </div>
    );
}

export default App;
