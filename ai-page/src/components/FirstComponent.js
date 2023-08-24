import { Suspense } from "react";

import Header from "./Header";  
import styled from "styled-components";
import user1 from "../assets/images/user1.jpg";
import user2 from "../assets/images/user2.jpg";
import user3 from "../assets/images/user3.jpg";
import user4 from "../assets/images/user4.jpg";

import {Canvas} from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Box from "./Box";
import Sphere from "./AnimatedSphere";
import "./FirstComponent.scss";

export default () => {

    return (
        <Wrapper className="container-background">
            <Header/>
            <section className="container-section">
                <div className="box-container">
                    <h1>Life is Better with AI</h1>

                    <div className="box-extra sphere_shadow" >
                        <div className="container-icon-image">

                            <img src={user1} />
                            <img src={user2} />
                            <img src={user3} />
                            <img src={user4} />
                            <p>10k + Active <span> users </span></p>
                        </div>
                        <div className="container-text-description">
                            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>

                    </div>
                </div>
                <div className="canvas-container">
                    {/*
                    <Canvas className="canvas">
                        <OrbitControls enableZoom={false} />
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[-2,5,2]} />
                        <Suspense fallback={null} >
                            <Box/>
                        </Suspense>
                    </Canvas>                    
                    */}
                    <Canvas className="canvas">
                        {/*
                        <OrbitControls enableZoom={false} />
                          */}
                        
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[-2,5,2]} />
                        <Suspense fallback={null} >
                            <Sphere className="sphere_shadow"/>
                        </Suspense>
                    </Canvas>
                </div>
            </section>
        </Wrapper>
    );
};


const Wrapper = styled.div`
    position: relative;



    .sphere_shadow {
        will-change: filter;
        transition: 1s filter ease;
      }
    .sphere_shadow:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
    }
    .sphere_shadow.vanilla:hover {
        filter: drop-shadow(0 0 2em #f7df1eaa);
    }
`;

