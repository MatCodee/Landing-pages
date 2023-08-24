import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components"; 
import { FaEthereum } from "react-icons/fa";

const Card = (props) => {
    return( 
        <CardElement>
            <div className='img-container'>
                <img src={props.img} />
            </div>
        
            <h4>{props.title}</h4>
            <div>
                <p>{props.price}ETH   <FaEthereum/></p> 
                <Link to="/">Buy</Link>

            </div>
        </CardElement>
    )
}

export default Card


const CardElement = styled.div`
    max-width: 400px;
    width: 100%;
    min-width: 280px;
    background-color: #ffff;
    border-radius: 20px;
    text-align: start;
    padding: 10px;  
    .img-container {
        img {
            width: 100%;
        }
    }
    P {
        font-weight: 700;
    }
    div {
        display:flex;
        justify-content: space-between;
        a {
            padding: 10px 50px;
            border-radius: 30px;
            background-color: #110125;
            color: white;
            text-decoration: none;
            font-weight: 600;
            font-size: 1.3rem;
        }
    }
    
`;