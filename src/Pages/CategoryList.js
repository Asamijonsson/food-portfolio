// import { useState } from "react";
import { collection, getDocs} from "firebase/firestore"
import {useEffect, useState} from "react"
// import PartyList from "./PartyList";
// import Casualdinner from "./Casualdinner";
// import Sushi from "./Sushi";
// import Ramen from "./Ramen"
// import styles from "./Button.module.css";
import style from "./categoryList.module.css";

// import profile1 from "../image/profile1.png";
const CategoryList = ({ menu }) => {
  // const [showParty, setShowParty] = useState(false);
  // const [showCasualDinner, setshowCasualDinner] = useState(false);
  // const [showSushi, setShowSushi] = useState(false);
  // const [showRamen, setShowRamen] = useState(false);
 

  // const handleShowPartyClick = () => {
  //   setShowParty(!showParty);
  // };

  // const handleShowCasualClick = () => {
  //   setshowCasualDinner(!showCasualDinner);
  // };

  // const handleShowSushiClick = () => {
  //   setShowSushi(!showSushi);
  // };

  // const handleShowRamenClick = () => {
  //   setShowRamen(!showRamen);
  // };

  // const handlePartyAria = () => {
  //   var n = document.getElementById("btn1").getAttribute("aria-expanded");
  //   if (n === "true") {
  //     n = "false";
  //   } else {
  //     n = "true";
  //   }
  //   document.getElementById("btn1").setAttribute("aria-expanded", n);
  // };

  // const handleCasualDinnerAria = () => {
  //   var n = document.getElementById("btn2").getAttribute("aria-expanded");
  //   if (n === "true") {
  //     n = "false";
  //   } else {
  //     n = "true";
  //   }
  //   document.getElementById("btn2").setAttribute("aria-expanded", n);
  // };

  // const handleSushiAria = () => {
  //   var n = document.getElementById("btn3").getAttribute("aria-expanded");
  //   if (n === "true") {
  //     n = "false";
  //   } else {
  //     n = "true";
  //   }
  //   document.getElementById("btn3").setAttribute("aria-expanded", n);
  // };

  // const handleRamenAria = () => {
  //   var n = document.getElementById("btn4").getAttribute("aria-expanded");
  //   if (n === "true") {
  //     n = "false";
  //   } else {
  //     n = "true";
  //   }
  //   document.getElementById("btn4").setAttribute("aria-expanded", n);
  // };

const [appetizers, setAppetizers] =useState([]);

// collection ref
const colRef = collection (menu, "appetizers")

// get collection data
const fetchPost = async()=>{
await getDocs(colRef)
.then((snapshot) =>{
  let newData=snapshot.docs.map((doc)=>({...doc.data(), id:doc.id}))
setAppetizers(newData)
console.log(appetizers[0].name)
})
}
useEffect(()=>{
  fetchPost();
},[])
//   const party = menu
//     .filter((i) => i.category === "Party")
//     .map(({ id, category, subcategory }) => ({ id, category, subcategory }));
//   const partyMenu = party[0].subcategory.map(({ categoryName, foodName }) => ({
//     categoryName,
//     foodName,
//   }));

//   const casualdinner = menu  
//     .filter((i) => i.category === "Casual dinner")
//     .map(({ id, category, foodName }) => ({ id, category, foodName }));
//   const dinnerMenu = casualdinner[0].foodName.map(({ name }) => ({ name }));

//   const sushi = menu
//     .filter((i) => i.category === "Sushi")
//     .map(({ id, category, foodName }) => ({ id, category, foodName }));
//   const sushiMenu = sushi[0].foodName.map(({ name }) => ({ name }));

//   const ramen = menu
//     .filter((i) => i.category === "Ramen")
//     .map(({ id, category, foodName }) => ({ id, category, foodName }));
// const ramenMenu =ramen[0].foodName.map(({name})=>({name}))


  
  return (
    <div className={style.background}>
      <p>{appetizers[0].name[0]}</p>
      {/* <img src={profile1} alt="" />
      <ul className={style.categoryList}>
        <li className={style.categoryList}>
          <button
            className={styles.button}
            aria-expanded="false"
            aria-controls="sect1"
            id="btn1"
            type="button"
            onClick={() => {
              handleShowPartyClick();
              handlePartyAria();
            }}
          >
            Party
          </button>
        </li>{" "}
        {showParty ? <PartyList partyMenu={partyMenu} /> : null}

        <li className={style.categoryList}>
          <button
            className={styles.button}
            aria-expanded="false"
            aria-controls="sect2"
            id="btn2"
            type="button"
            onClick={() => {
              handleShowCasualClick();
              handleCasualDinnerAria();
            }}
          >
            Casual Dinner{" "}
          </button>
        </li>
        {showCasualDinner ? <Casualdinner dinnerMenu={dinnerMenu} /> : null}
        <li className={style.categoryList}>
          <button
            className={styles.button}
            aria-expanded="false"
            aria-controls="sect3"
            id="btn3"
            type="button"
            onClick={() => {
              handleShowSushiClick();
              handleSushiAria();
            }}
          >
            Sushi{" "}
          </button>
        </li>
        {showSushi ? <Sushi sushiMenu={sushiMenu} /> : null}
         <li className={style.categoryList}>
          <button
            className={styles.button}
            aria-expanded="false"
            aria-controls="sect4"
            id="btn4"
            type="button"
            onClick={() => {
              handleShowRamenClick();
              handleRamenAria();
            }}
          >
           Ramen{" "}
          </button>
        </li>
        {showRamen ? <Ramen ramenMenu={ramenMenu} /> : null}
      </ul>

      */}
    </div>
  );
};

export default CategoryList;
