import { Routes, Route } from "react-router-dom";
import {initializeApp} from "firebase/app"
import {getFirestore, collection, getDocs} from "firebase/firestore"
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Pages/Home";
import Aboutme from "./Pages/Aboutme";
import Contact from "./Pages/Contact";
// import Works from "./Pages/Works";
// import Party from "./Pages/Party";
// import Casualdinner from "./Pages/Casualdinner";
// import Sushi from "./Pages/Sushi";
// import Ramen from "./Pages/Ramen";




function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyD9tnrrB2wlB1h0YGkwnz0iPDQBNWICGNM",
    authDomain: "profile-backend-18772.firebaseapp.com",
    projectId: "profile-backend-18772",
    storageBucket: "profile-backend-18772.appspot.com",
    messagingSenderId: "593975957529",
    appId: "1:593975957529:web:b587d7693c216c72b17288",
    measurementId: "G-XG5BNRR1F7"
  };
  // init firebase app
  initializeApp(firebaseConfig)
  
  // init services
  const db = getFirestore()

  // collection ref
const colRef = collection (db, "appetizers")

// get collection data
getDocs(colRef)
.then((snapshot) =>{let appetizers=[]
snapshot.docs.forEach((doc)=>{
  appetizers.push({ ...doc.data(), id:doc.id})
})
console.log(appetizers)
})
.catch(err =>{
  console.log(err.message)
})


  // const receipe = [
  //   {
  //     id: 0,
  //     category: "Party",
  //     subcategory: [
  //       {
  //         categoryName: "appetizers",
  //         foodName: [
  //           { name: "Kimchi" },
  //           { name: "Harumaki" },
  //         ],
  //       },
  //               {
  //         categoryName: "main",
  //         foodName: [
  //           {
  //             name: "Okonomiyaki",
  //           },
  //           { name: "Tonkatsu" },
  //         ],
  //       },
  //       {categoryName:"dessert",
  //     foodName:[
  //       {name:"Goma dango"},
  //       {name:"Matcha ice cream"}
  //     ]}
  //     ],
  //   },

  //   {
  //     id: 1,
  //     category: "Casual dinner",
  //     foodName: [
  //       {
  //         name: "Tempura",
  //       },
  //       { name: "Yakitori" },
  //       { name: "Gyu Tataki" },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     category: "Sushi",
  //     foodName: [
  //       {
  //         name: "Maki Sushi",
  //       },
  //       { name: "Nigiri" },
      
  //     ],
  //   },
  //   {
  //     id: 4,
  //     category: "Ramen",
  //     foodName: [
  //       {
  //         name: "Tonkotsu Ramen",
  //       },
  //       { name: "Miso Ramen" },
  // ]}]

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="aboutme" element={<Aboutme />} />
        <Route path="contact" element={<Contact />} />
        {/* <Route path="works" element={<Works menu={receipe} />} />
        <Route path="" element={<Party menu={receipe} />} />
        <Route path="" element={<Casualdinner menu={receipe} />} />
        <Route path="" element={<Sushi menu={receipe} />} />
        <Route path="" element={<Ramen menu={receipe} />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
