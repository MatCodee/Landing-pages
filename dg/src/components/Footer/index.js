import "./index.scss";
import { Link } from "react-router-dom";
import {BsInstagram,BsDiscord,BsTwitter} from "react-icons/bs";
const Footer = () => {
    return (
        <footer>
            <div className="container-footer">
                <div className="container-footer-grid">
                    <div className="item">
                        <span>DG</span>
                        <p>welkfnwlkeflwkenflwkneflkwnenlf</p>
                        <div>
                            <Link to="/">  <BsInstagram className="icon-element-footer" /> </Link>
                            <Link to="/"> <BsDiscord className="icon-element-footer" /> </Link>
                            <Link to="/"> <BsTwitter className="icon-element-footer" /> </Link>
                        </div>
                    </div>
                    <div className="item">
                        <h3>MarketPlace</h3>
                        <ul>
                            <li><Link to="/">Explore</Link></li>
                            <li><Link to="/">Top Collections</Link></li>
                            <li><Link to="/">Categories</Link></li>
                            <li><Link to="/">Collectible</Link></li>
                        </ul>
                    </div>
                    <div className="item">
                        <h3>Resources</h3>
                        <ul>
                            <li><Link to="/">Help Center</Link></li>
                            <li><Link to="/">Partners</Link></li>
                            <li><Link to="/">Blog</Link></li>

                        </ul>
                    </div>
                    <div className="item">
                        <h3>Company</h3>
                        <ul>
                            <li><Link to="/">About Us</Link></li>
                            <li><Link to="/">Careers</Link></li>
                            <li><Link to="/">Suport</Link></li>
                            <li><Link to="/">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer