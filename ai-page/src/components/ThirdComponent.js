import "./ThirdComponent.scss";

import user1 from "../assets/images/user1.jpg";
import user2 from "../assets/images/user2.jpg";
import user3 from "../assets/images/user3.jpg";

const ThirdComponent = () => {
    return (
        <div className="section-container">
            <div className="container">
                <h3>Steria Executives</h3>
                <div className="container-cards">
                    <div className="card-container-people">
                        <p>Daniel Cohen - CEO</p>
                        <div className="container-img">
                            <img src={user1} />
                        </div>
                    </div>
                    <div className="card-container-people">
                        <p>Matias - Developer</p>
                        <div className="container-img">
                            <img src={user2} />
                        </div>
                    </div>
                    <div className="card-container-people">
                        <p>James - Developer</p>
                        <div className="container-img">
                            <img src={user3} />
                        </div>
                    </div>
                </div>
                <div className="container-people-select">
                    <h3>Schedule a meeting with our team</h3>
                    <a href="#" className="link-getstarted">Lets' Get Started </a>
                </div>
            </div> 
        </div>
    )
}

export default ThirdComponent