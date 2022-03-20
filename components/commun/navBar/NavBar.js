import react, { useEffect, useMemo } from "react";
import { useRef, useState } from "react";
import { auth } from "../../../firebase";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../../firebase";
import RadioStyled from "../../../styles/RadioStyled";
import RdvOrNotInput from "../../../styles/RdvOrNotInput";
import TopNavBar from "../../../styles/TopNavBar";
import NewCarEntry from "../../specific/accueil/NewCarEntry";
import Pisteur from "../../specific/accueil/Pisteur";
import Carousel from "../carousel/MyCarousel";

import content, { initialCar } from "../flipCard/content";
import { techList } from "../flipCard/techList";
import CarEntry from "../genericComponents/TechCard";
import TakePicture from "../genericComponents/TakePicture";
import ChefAtelierAtelier from "../../specific/ca/ChefAtelierAtelier";

import ToDo from "../genericComponents/ToDo";
import MainCar from "../MainCar/MainCar";
import { async } from "@firebase/util";
import Accueil from "../../specific/accueil/Accueil";
import CsAffected from "../genericComponents/csAffected";
import AccueilNext from "../../specific/accueil/AccueilNext";
import CsCs from "../../specific/cs/CsCs";
import AccueilCA from "../../specific/accueil/AccueilCA";
import ChefAtelierGarage from "../../specific/ca/ChefAtelierGarage";
import AccueilTech from "../../specific/accueil/AccueilTech";
import CsCaroussel from "../carousel/CsCaroussel";
import CPRVCaroussel from "../carousel/CPRVCaroussel";
import CarToChangeByCs from "../genericComponents/CarToChangeByCs";
import ChefAtelierSwip from "../../specific/ca/ChefAtelierSwip";
import CPRVSwip from "../../specific/ca/CPRVSwip";
import CSSwip from "../../specific/ca/CSSwip";
import TechCard from "../genericComponents/TechCard";

import AjouterUser from "../../AjouterUser";

export default function NavBar() {
  function checkProfilTech(checking) {
    return checking.email == auth.currentUser.email;
  }
  const user = techList.find(checkProfilTech);

  // function checkDoing(checking) {
  //   return checking.whereIsTheCar === `${user.nom}`;
  // }
  const profil = user.job;
  const carPic = auth.currentUser.photoURL?auth.currentUser.photoURL:false;
  

  const [toggle, setToggle] = useState("close");
  const [darkMode, setDarkMode] = useState("");
  // const [carsList,setCarsList]=useState(null)
  const sideBarToggle = (toggle) => {
    toggle === "close" ? setToggle("") : setToggle("close");
  };
  const darkModeToggle = (toggle) => {
    toggle === "dark" ? setDarkMode("light") : setDarkMode("dark");
  };

  // async function getCarsData(myDb) {

  //   const carsCol = collection(myDb, 'cars');
  //   const carsSnapshot = await getDocs(carsCol);
  //   const list = carsSnapshot.docs.map(doc => doc.data());
  //   setCarsList(list);

  // }

  // const myMemo = useMemo(()=>{getCarsData(db),[db]})

  // console.log(`db changed : ${myMemo}`);

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
              
              width: "100%",
              height: "5.5vw",
              color:"green",
              marginLeft:"20px",
              fontSize:"4vw",
             
            }}
            
          >
            {" "}Babel{" "}
            <div
              style={{
                position: "absolute",
                display: "flex",
                color:"black",
                width: "auto",
                top: "1vh",
                right: "0px",
              }}
            >
              <p style={{fontSize:"3vw"}}>Bonjour : {user.nom}</p>

              <img
                style={{
                  fontSize:"10px",
                  borderRadius: "50%",
                  width: "5vw",
                  objectFit: "contain",
                }}
                src={carPic}
                alt="photo profil"
              ></img>
            </div>
          </div>

          {/* <div style={{display:"flex"}}>
          {content.map((car) => {return<ChefAtelierCs key={car.id} props={car} />;
          })}
          </div> */}
          <TopNavBar>
          {profil == "CA" &&<ChefAtelierSwip></ChefAtelierSwip>}
            {/******************PISTEUR*************PISTEUR**************PISTEUR**************PISTEUR**************PISTEUR*********/}
            {profil=="Pisteur"&&<TakePicture ></TakePicture>}
            {/******************PISTEUR*************PISTEUR**************PISTEUR**************PISTEUR**************PISTEUR*********/}
            {profil=="Test"&&<TechCard ></TechCard>}
            {/******************ACCUEIL**************ACCUEIL*******ACCUEIL*******ACCUEIL*******************/}
            {/* {profil=="CPRV"&&<Accueil user={user} ></Accueil>} */}
            {/******************ACCUEIL*******ACCUEIL*******ACCUEIL*******ACCUEIL*******ACCUEIL*******************/}
            {/* {profil == "CA" && <AccueilCA user={user}></AccueilCA>} */}
            {/* <CsAffected></CsAffected> */}
            {/* {profil == "CS" && <CsCs user={user}></CsCs>} */}
            {/* {profil == "CS" && <CsCs user={user}></CsCs>} */}
            {/* <MainCar/> */}
            {/* <StyledFooter></StyledFooter> */}
            {/* <Tech props={content}></Tech> */}
            {profil == "technicien" && <AccueilTech user={user}></AccueilTech>}
           
            {/* {profil == "CA" &&<ChefAtelierAtelier></ChefAtelierAtelier>} */}
          </TopNavBar>

          <TopNavBar>
          {/* {profil == "CS" && <CsCaroussel user={user}></CsCaroussel>} */}
          {profil == "CS" && <CSSwip user={user}></CSSwip>}
            {/* <ToDo props={content}></ToDo> */}
            {/* <RdvOrNotInput></RdvOrNotInput> */}
            {/* <RadioStyled></RadioStyled> */}
           {profil == "Test" && <AjouterUser user={user}></AjouterUser>}
            {/* {profil=="Pisteur"&&<Pisteur ></Pisteur>} */}
            {profil == "CA" && <ChefAtelierGarage></ChefAtelierGarage>}

            {/******************ACCUEIL*******ACCUEIL*******ACCUEIL*******ACCUEIL*******ACCUEIL*******************/}
            {profil=="CPRV"&&<CPRVSwip user={user} ></CPRVSwip>} 
            {/* {profil=="CPRV"&&<CPRVCaroussel user={user} ></CPRVCaroussel>}  */}
            {/******************ACCUEIL*******ACCUEIL*******ACCUEIL*******ACCUEIL*******ACCUEIL*******************/}

            {/* <ToDo props={content,techList} ></ToDo> */}
          </TopNavBar>
        </section>
      </div>
    </>
  );
}
