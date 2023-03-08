import { NavLink } from "react-router-dom";
function Header() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/Landing">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Contact">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/About">About</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
