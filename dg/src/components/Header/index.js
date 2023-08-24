import { useState } from "react";

import "./index.scss";
import Button from "../base/Button";
import { BiMenuAltRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import { BiX } from "react-icons/bi";


const Header = () => {
    const [toggle,setToggle] = useState(false)
    function toggle_activate() {
        setToggle(!toggle)
    }
    return (
        <div className="container-header">
            <div className="toggle-nav">
                <code>DeG</code>
                <span onClick={toggle_activate} className="icon-header-toggle"><BiMenuAltRight /></span>
            </div>
            <div className={`container-toggle-show ${toggle ? 'active' : ''}`}>
                <div className="toggle-nav">
                    <code>DeG</code>
                    <span onClick={toggle_activate} className="icon-header-toggle-element"><BiX /></span>
                </div>
                <div className={`toggle-show`}>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Nosotros</Link></li>
                        <li><Link to="/">Extra</Link></li>
                    </ul>
                </div>
            </div>
            <div className="manu-navbar">
                <span>DeepG</span>
                <ul>
                    <li>Home</li>
                    <li>Nosotros</li>
                    <li>Extra</li>
                </ul>
                <Button dark text="Login" />
            </div>
        </div>

    )
}


export default Header