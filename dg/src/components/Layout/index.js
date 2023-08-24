
import "./index.scss";
import Header from "../Header";
import Home from "../Home";
import Section from "../section";
import Footer from "../Footer";


const Layout = () => {
    return (
        <div>
            <div className="container">
                <Header/>
                <Home/>
            </div>
            <Section/>
            <Footer/>
        </div>
    )
}

export default Layout