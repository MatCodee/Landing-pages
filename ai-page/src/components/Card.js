import "./Card.scss";

const Card = (props) => { 
    return (
        <div className={props.class_hidden}> 
            <div className="card-container">
                <div className="header-card">
                    <h3>Smart Contract and Web Development</h3>
                </div>
                <ul>
                    <li>Minting Contracts</li>
                    <li>Staking Contracts</li>
                    <li>Migrating Contracts</li>
                </ul>
            </div>
        </div>
    )
}

export default Card