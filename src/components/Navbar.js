import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav id="main-nav" className="navbar navbar-dark bg-dark mb-4">
            <Link to="/departments">Departments</Link>
        </nav>
    );
}

export default Navbar;