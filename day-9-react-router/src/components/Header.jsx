import { NavLink } from "react-router-dom";
function Header() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/ProductPage">ProductPage</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
