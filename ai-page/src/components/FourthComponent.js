import "./FourthComponent.scss";



const FourthComponent = () => {
    const cards = [
        {
            title: "Lending",
            description: "Lend or share Nft"
        },
        {
            title: "Lending",
            description: "best way to manager your CAPS and discover the Termoa Blockchain ecosystem"
        },
        {
            title: "Lending",
            description: "A Cryoto Wallet for term Chain. The best way to "
        }
    ]
    return (
        <div className="background-component">
            <div className="container-content">
                <span>Features</span>
                <h2>NFTS features to create never seen before use.</h2>
                <p>A Cryoto Wallet for term Chain. The best way to manager your CAPS and discover the Termoa Blockchain ecosystem</p>
                
                <div className="container-card">
                    {cards.map((e) => {
                        return <div className="card">
                            <h4>{e.title}</h4>
                            <p>{e.description}</p>
                        </div>
                    })}
                </div>

            </div>


        </div>
    )
}

export default FourthComponent