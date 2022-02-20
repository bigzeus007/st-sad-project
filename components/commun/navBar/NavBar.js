import react from "react";
import { useRef, useState } from "react";
import { auth } from "../../../firebase";
import TopNavBar from "../../../styles/TopNavBar";
import Carousel from "../carousel/MyCarousel";

import content, { initialCar } from "../flipCard/content";
import { techList } from "../flipCard/techList";
import CarEntry from "../genericComponents/CarEntry";
import TakePicture from "../genericComponents/TakePicture";


import ToDo from "../genericComponents/ToDo";
import MainCar from "../MainCar/MainCar";

export default function NavBar() {
  const user = auth.currentUser;
  const [toggle, setToggle] = useState("close");
  const [darkMode, setDarkMode] = useState("");
  const sideBarToggle = (toggle) => {
    toggle === "close" ? setToggle("") : setToggle("close");
  };
  const darkModeToggle = (toggle) => {
    toggle === "dark" ? setDarkMode("light") : setDarkMode("dark");
  };

  return (
    <>
      <div className={darkMode}>
        <nav className={`sidebar ${toggle}`}>
          <header>
            <div className="image-text">
              <span className="image">
                <img src="" alt="" />
              </span>

              <div className="text logo-text">
                <span className="name">Tarhi said</span>
                <span className="profession">Web developer</span>
              </div>
            </div>

            <i
              onClick={() => {
                sideBarToggle(toggle);
              }}
              className="bx bx-chevron-right toggle"
            ></i>
          </header>

          <div className="menu-bar">
            <div className="menu">
              <li className="search-box">
                <i className="bx bx-search icon"></i>
                <input type="text" placeholder="Search..." />
              </li>

              <ul className="menu-links">
                <li className="nav-link">
                  <a href="#">
                    <i className="bx bx-home-alt icon"></i>
                    <span className="text nav-text">Tableau de bord</span>
                  </a>
                </li>

                <li className="nav-link">
                  <a href="#">
                    <i className="bx bx-bar-chart-alt-2 icon"></i>
                    <span className="text nav-text">Revenue</span>
                  </a>
                </li>

                <li className="nav-link">
                  <a href="#">
                    <i className="bx bx-bell icon"></i>
                    <span className="text nav-text">Notifications</span>
                  </a>
                </li>

                <li className="nav-link">
                  <a href="#">
                    <i className="bx bx-pie-chart-alt icon"></i>
                    <span className="text nav-text">Analytics</span>
                  </a>
                </li>

                <li className="nav-link">
                  <a href="#">
                    <i className="bx bx-heart icon"></i>
                    <span className="text nav-text">Likes</span>
                  </a>
                </li>

                <li className="nav-link">
                  <a href="#">
                    <i className="bx bx-wallet icon"></i>
                    <span
                      className="text nav-text"
                      onClick={() => auth.signOut()}
                    >
                      Wallets
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="bottom-content">
              <li className="">
                <a href="#" onClick={() => auth.signOut()}>
                  <i className="bx bx-log-out icon"></i>

                  <span className="text nav-text">Logout</span>
                </a>
              </li>

              <li className="mode">
                <div className="sun-moon">
                  <i className="bx bx-moon icon moon"></i>
                  <i className="bx bx-sun icon sun"></i>
                </div>
                <span className="mode-text text">{darkMode} mode</span>

                <div
                  className="toggle-switch "
                  onClick={() => {
                    darkModeToggle(darkMode);
                  }}
                >
                  <span className="switch"></span>
                </div>
              </li>
            </div>
          </div>
        </nav>

        <section className="home">
          <div
            style={{
              width: "100vw",
              height: "10vh",
              border: "5px yellow solid",
            }}
            className="text"
          >
            {" "}
            CHRONOS{" "}
            <div
              style={{
                position: "absolute",
                display:"flex",
                height: "10vh",
                width:"auto",
                top: "0px",
                right: "0px",
              }}
            >
              <p>Bonjour : {user.displayName}</p>

              <img
                style={{
                  borderRadius: "50%",
                  width:"10vh",
                  objectFit: "fill",
                }}
                src={user.photoURL}
                alt="photo profil"
              ></img>
            </div>
          </div>

          {/* <div style={{display:"flex"}}>
          {content.map((car) => {return<ChefAtelierCs key={car.id} props={car} />;
          })}
          </div> */}
          <TopNavBar >
          <CarEntry props={content,techList} ></CarEntry>
            {/* <MainCar/> */}
            {/* <StyledFooter></StyledFooter> */}
            {/* <Tech props={content}></Tech> */}
            {/* <ChefAtelierAtelier></ChefAtelierAtelier> */}
          </TopNavBar>

          <TopNavBar >
            <TakePicture></TakePicture>
            {/* <ToDo props={content,techList} ></ToDo> */}
            
          </TopNavBar>
        </section>
      </div>
    </>
  );
}
