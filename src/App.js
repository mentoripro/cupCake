import "./App.css";
import { useTranslation } from "react-i18next";
import Localicon from "./img/Icon.svg";
import LocaPhone from "./img/2. Пулсация, малая.svg";
import { Parallax } from "react-parallax";
import BerryOne from "./img/berry (1).svg";
import BerryTwo from "./img/berry (2).svg";
import Berry from "./img/berry.svg";
import leaf from "./img/leaf.svg";
import { useState, useEffect } from "react";
import SecondBlock from "./SecondBlock";

function App() {
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

  return (
    <div>
      <Parallax
        bgImage={require("./img/bg.jpg")}
        bgImageAlt="background"
        strength={300}
        className="mainBlock"
      >
        <header>
          <div className="container">
            <a href="#">{t("mainBlock.logo")}</a>

            <div className="menu">
              <nav>
                <img src={Localicon} />
                <span>{t("mainBlock.address")}</span>
              </nav>
              <nav>
                <img src={LocaPhone} />
                <p>
                  8 (812) 844-95-49 <br />{" "}
                  <span>{t("mainBlock.openHours")}</span>
                </p>
              </nav>
            </div>
          </div>
        </header>
        <div className="container">
          <article>
            <h3>вкуснейшие</h3>
            <h4>
              Пирожные и капкейки от 150 ₽/шт. с доставкой по Астане
            </h4>
            <p>
              Приготовим за 3 часа в день заказа. Доставка на авто в
              холодильнике.
            </p>
            <div>
              {" "}
              <a href="">Перейти в каталог</a>
              <p>
                9 различных <br /> видов на выбор
              </p>
            </div>
          </article>
        </div>
        <div
          style={{
            position: "absolute",
            left: `-${offset}px  `,
            top: "90px ",
          }}
        >
          <img src={Berry} style={{ width: "120px" }} />
        </div>
        <div
          style={{ position: "absolute", right: `-${offset}px`, top: "120px " }}
        >
          <img src={BerryTwo} style={{ width: "100px" }} />
        </div>
        <div style={{ position: "absolute", left: `-${offset}px  ` }}>
          <img src={leaf} style={{ width: "140px" }} />
        </div>{" "}
        <div
          style={{
            position: "absolute",
            right: "0px",
            transform: `translateX(-${offset}px)`,
          }}
        >
          <img src={BerryOne} style={{ width: "150px" }} />
        </div>
      </Parallax>
      <SecondBlock />
    </div>
  );
}

export default App;
