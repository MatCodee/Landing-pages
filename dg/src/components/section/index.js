import { useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import {AnimatePresence, motion} from "framer-motion";

//componenets:
import Card from "../base/Card";
import Button from "../base/Button";


//icons
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";



//images:
import Avatar1 from "../../assets/avatar1.png";
import Avatar2 from "../../assets/avatar2.png";


import marketplace1 from "../../assets/marketplace1.png";
import marketplace2 from "../../assets/marketplace2.png";
import marketplace3 from "../../assets/marketplace3.png";
import marketplace4 from "../../assets/marketplace4.png";
import marketplace5 from "../../assets/marketplace5.png";
import marketplace6 from "../../assets/marketplace6.png";
import marketplace7 from "../../assets/marketplace7.png";
import marketplace8 from "../../assets/marketplace8.png";




const Section = () => {
  const trens = [
    {
      id: 1,
      image: marketplace1,
      title: "Aiboi-meta",
      price: 5,
    },
    {
      id: 2,
      image: marketplace2,
      title: "Pedram-mohamm...",
      price: 5,
    },
    {
      id: 3,
      image: marketplace3,
      title: "Eduardo-pena",
      price: 5,
    },
    {
      id: 4,
      image: marketplace4,
      title: "Daehwefwefo-cha",
      price: 5,
    },
    {
      id: 5,
      image: marketplace5,
      title: "Daehowefwef-cha",
      price: 5,
    },
    {
      id: 6,
      image: marketplace6,
      title: "Daehwefwefo-cha",
      price: 5,
    },
    {
      id: 7,
      image: marketplace7,
      title: "Daewwefweho-cha",
      price: 5,
    },
  ]
  const marketPlaceData = [
    {
      image: marketplace1,
      name: "Aiboi-meta",
      gener: "Generic",
    },
    {
      image: marketplace2,
      name: "Pedram-mohamm...",

      gener: "Common",
    },
    {
      image: marketplace3,
      name: "Eduardo-pena",
    
      gener: "Generic",
    },
    {
      image: marketplace4,
      name: "Daeho-cha",
      gener: "Common",
    },
    {
      image: marketplace5,
      name: "Justine-florentino",
      gener: "Trading",
    },
    {
      image: marketplace6,
      name: "Hoang-l-p-solan",
      gener: "Trading",
    },
    {
      image: marketplace7,
      gener: "Generic",
      name: "Rare",
    },
    {
      image: marketplace8,
      name: "Joshua-jay",
      gener: "Rare",
    },
  ];

  const [element,setElement] = useState(marketPlaceData)
  const marketPlaceType = [
    "All",
    "Art",
    "Generic",
    "Common",
    "Trading",
    "Rare",
  ];

  function nexCardScroll() {
    let box = document.querySelector('.container-card-flex')
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width
    console.log(width)
  }
  function prevCardScroll() {
    let box = document.querySelector('.container-card-flex')
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width
    console.log(width)
  }

  const filterElement = (text) => {
    if(text === 'All') {
      setElement(marketPlaceData)
    }else {
      const data = marketPlaceData.filter((e) => e.gener === text)
      setElement(data)
    }
  }  
  return (
    <section>

      <div className="container-section">
        <div className="container-grid-element">
          <div className="container-content">
            <h2>Metarverse is the future</h2>
            <p>
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum h
            </p>
            <div>
              <FiArrowLeft className="icon-button" />
              <FiArrowRight className="icon-button" />
            </div>

          </div>
          <div className="container-img">
            <img className="pos-img-left" src={Avatar1} />
            <img className="pos-img-right" src={Avatar2} />
          </div>
        </div>


        <div className="container-products">
          <span></span>
          <h3>Join the Comunity</h3>
          <Link to="/">JOIN</Link>
        </div>

        <div className="container-trenfing">
          <div className="container-selected">
            <h3>Trending Nfts</h3>
            <div>
              <FiArrowLeft onClick={prevCardScroll} className="icon-button" />
              <FiArrowRight onClick={nexCardScroll} className="icon-button" />
            </div>
          </div>
          <div className="container-card-flex">
            {trens.map((e,index) => {
              return <Card key={index} img={e.image} title={e.title} price={e.price} />
            })}
          </div>

        </div>

        <div className="title">
          <h2>NFT Marketplace</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.
          </p>
        </div>
        <div className="marketPlaceTypes">
          {marketPlaceType.map((text, index) => {
            return <Button filterElement={filterElement} text={text} key={index} blue={index === 0} />;
          })}
        </div>
        <div className="marketPlaces">
          <AnimatePresence>
            {element.map(({ image, name }) => (
              (
                <motion.div
                  key={name}
                  layout
                  initial={{opacity:0}}
                  animate={{opacity:1}}
                  exit={{opacity:0}}
                  transition={{duration:0.5}}
                >
                  <div className="marketplace">
                    <div className="image">
                      <img src={image} alt="marketplace" />
                    </div>
                    <div className="name">
                      <h4>{name}</h4>
                      <BsThreeDots className="icon-name" />
                    </div>
                    <h6 className="username">@koolkishansheth</h6>
                    <div className="price-container">
                      <h5 className="price">5.5ETH</h5>
                      <FaEthereum />
                    </div>
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>
      </div>


    </section>
  )
}


export default Section;