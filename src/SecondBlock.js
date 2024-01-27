import { useTranslation } from "react-i18next";
import ImgOne from "./img/imgOne.svg";
import ImgTwo from "./img/imgTwo.svg";
import ImgThree from "./img/imgThree.svg";
import ImgFour from "./img/imgFour.svg";
import ImgFive from "./img/imgFive.svg";
import ImgSix from "./img/imgSix.svg";
import ImgSeven from "./img/imgSeven.svg";
import ImgEight from "./img/imgEight.svg";
import ImgNine from "./img/imgNine.svg";
import Newberry from "./img/newberry.png";
import Newleaf from "./img/newleaf.png";
import Newleaf2 from "./img/newleaf2.png";
import "./App.css";
import { Parallax } from "react-parallax";
import { useState, useEffect } from "react";

function SecondBlock() {
  const { t, i18n } = useTranslation();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const offset = scrollPosition * 0.5;

  const images = [
    { id: "imageOne", img: ImgOne },
    { id: "imageTwo", img: ImgTwo },
    { id: "imageThree", img: ImgThree },
    { id: "imageFour", img: ImgFour },
    { id: "imageFive", img: ImgFive },
    { id: "imageSix", img: ImgSix },
    { id: "imageSeven", img: ImgSeven },
    { id: "imageEight", img: ImgEight },
    { id: "imageNine", img: ImgNine },
  ];

  return (
    <Parallax
      bgImage={require("./img/photo-1483232539664-d89822fb5d3e.avif")}
      bgImageAlt="background"
      strength={300}
      className="secondBlock"
    >
      <div className="container">
        <h2>{t("secondBlock.tagline")}</h2>

        <div className="products_block">
          {images.map((imageData) => (
            <div className="product_item" key={imageData.id}>
              <img
                src={imageData.img}
                alt={t(`secondBlock.${imageData.id}.cakeName`)}
              />
              <h6>{t(`secondBlock.${imageData.id}.cakeName`)}</h6>
              <p>{t(`secondBlock.${imageData.id}.description`)}</p>
              <h3>{t(`secondBlock.${imageData.id}.price`)}</h3>
              <button>{t(`secondBlock.${imageData.id}.orderButton`)}</button>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          left: `${offset}px  `,
          top: "90px ",
        }}
      >
        <img src={Newberry} style={{ width: "120px" }} />
      </div>
      <div
        style={{
          position: "absolute",
          left: "0px",
          transform: `translateX(${offset}px)`,
        }}
      >
        <img src={Newleaf} style={{ width: "150px" }} />
      </div>
      <div
        style={{
          position: "absolute",
          right: "0px",
          transform: `translateX(-${offset}px)`,
        }}
      >
        <img src={Newleaf2} style={{ width: "150px" }} />
      </div>
    </Parallax>
  );
}

export default SecondBlock;
