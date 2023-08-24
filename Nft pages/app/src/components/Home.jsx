import React from 'react';
import Navbar from "./Navbar";
import styled from "styled-components"; 


// Componenets:
import Button from "./Button";

// Imagges
import hero from "../assets/hero2.png";
import heroText from "../assets/heroText.png";

import choose from "../assets/choose.png";

export default function Home() {
  return (
    <div>
        <Section>
            <Navbar/>
            <div className='container'>
                <div className='content'>
                    <h1>

                        Explore our digital Nft Market place
                    </h1>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
          
                    </p>
                    <div className='buttons'>
                        <Button blue text="Explore Now"></Button>
                        <Button text="Create Nft"></Button>
                    </div>
                    <div className='data'>
                        <div className='dataTab'>
                            <h2>40K</h2>
                            <h5>ArtWork</h5>
                        </div>
                        <div className='dataTab'>
                            <h2>12K</h2>
                            <h5>Auction</h5>
                        </div>
                        <div className='dataTab'>
                            <h2>20K</h2>
                            <h5>Artist</h5>
                        </div>
                    </div>
                </div>
                <div className='image'>
                    <img src={hero} alt="hero" />
                </div>
            </div>
        </Section>
    </div>
  )
}

const Section = styled.section`
    margin: 0.5rem;
    border-radius: 1rem;
    position:relative;
    margin-bottom: 5rem;
    .ellipse {
        height: 30rem;
        width: 30rem;
        background-color: #ae54c27d;
        opacity: 0.5;
        border-radius: 100%;
        filter: blur(2000px);
        position: absolute;
        bottom: -30%;
        left: -10%;
        z-index: 1;
    }
    .container {
        padding: 2rem;
        marign: 0 2rem;
        display: flex;
        .image {
            img {
                border-radius: 20px;
            }
        }
        .content {
            z-index: 10;
            display: flex;
            flex-direction: column;
            gap: 2rem;
            margin-top: 5rem;
            padding-right: 2rem;
            h1 {
                color: white;
                font-size: 5rem;
            }
            p {
                color: #a6a6a6;
            }
            .buttons {
                display: flex;
                gap: 2rem;
            }
            .data {
                display: flex;
                gap: 5rem;
                .dataTab {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    h2 {
                        color: white;
                        font-size: 2rem;
                    }
                    h5 {
                        text-align: center;
                        color: #a6a6a6;
                    }
                }
            }
        }
    }
`;