


import "./index.scss";
// icons:
import MenuIcon from '@mui/icons-material/Menu';



const Header = () => {

    return (
        <header>
            <div className="header__container">
                <h2>Scale.AI</h2>
                <ul>
                    <li>Home</li>
                    <li>Our features</li>
                    <li>Pricing</li>
                    <li>Our Story</li>
                    <li>Comunity</li>
                </ul>
                <span>Sign Up Now</span>
            </div>
            <div className="response__header">
                <h2>Scale.AI</h2>
                <MenuIcon className="icon-desing" />
            </div>
        </header>
    )
}


export default Header