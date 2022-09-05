import React, {Component} from "react"
import Logo from "../images/airbnb-logo.jpg"

class Navbar extends Component {
    render() {
        return (
            <nav className="nav">
            <img className="logo" src={Logo} alt="logo" />
        </nav>
        );
    }
}
export default Navbar;


