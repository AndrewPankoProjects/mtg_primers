import React, { Component } from 'react';
import { MenuItems } from "./MenuItems";
import './Navbar.css';
// import { Button } from "../Button";

class Navbar extends Component {
    // const [clicked, setClicked] = useState();
    
    state = { clicked: false }

    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }
    // I want to incorperate react hooks instead of using this to reduce the amount of className's called
    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">MTG Primers</h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className = {this.state.clicked ? 'nav-menu active' : 'nav-menu' }>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar