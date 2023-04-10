import { Routes, Route } from "react-router-dom";


import style from "./App.module.css";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Pages/Home";
import Aboutme from "./Pages/Aboutme";
import Contact from "./Pages/Contact";
import Works from "./Pages/Works";
import Party from "./Pages/Party";
import Casualdinner from "./Pages/Casualdinner";
import Sushi from "./Pages/Sushi";
import Ramen from "./Pages/Ramen";


function App() {

  const receipe = [
    {
      id: 0,
      category: "Party",
      subcategory: [
        {
          categoryName: "appetizers",
          foodName: [
            { name: "Kimchi" },
            { name: "Harumaki" },
          ],
        },
                {
          categoryName: "main",
          foodName: [
            {
              name: "Okonomiyaki",
            },
            { name: "Tonkatsu" },
          ],
        },
        {categoryName:"dessert",
      foodName:[
        {name:"Goma dango"},
        {name:"Matcha ice cream"}
      ]}
      ],
    },

    {
      id: 1,
      category: "Casual dinner",
      foodName: [
        {
          name: "Tempura",
        },
        { name: "Yakitori" },
        { name: "Gyu Tataki" },
      ],
    },
    {
      id: 3,
      category: "Sushi",
      foodName: [
        {
          name: "Maki Sushi",
        },
        { name: "Nigiri" },
      
      ],
    },
    {
      id: 4,
      category: "Ramen",
      foodName: [
        {
          name: "Tonkotsu Ramen",
        },
        { name: "Miso Ramen" },
  ]}]
  
 
  return (
    <div className={style.App}>

   <a href="#main-content" className="skip-link" >Skip to main content</a>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="aboutme" element={<Aboutme />} />
        <Route path="contact" element={<Contact />} />
        <Route path="works" element={<Works menu={receipe} />} />
        <Route path="" element={<Party menu={receipe} />} />
        <Route path="" element={<Casualdinner menu={receipe} />} />
        <Route path="" element={<Sushi menu={receipe} />} />
        <Route path="" element={<Ramen menu={receipe} />} />
      </Routes>
      <Footer />
    
    </div>
  );
}

export default App;
