import React from 'react';
import { Link } from 'react-router-dom';
import "./index.scss";


const Home = () => {
    return (
            <div className="home-page">
                <div className="home-title">
                    <h1> Crea tu propio mundo con tus reglas y genera un ecosistema de cripto activos. </h1>
                    <p> Genera el mayor crecimiento de tu mundo ideal.</p>
                    <Link className='home-button' to='/about'>Get Started</Link>
                </div>

            </div>

    )
}


export default Home