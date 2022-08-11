import React from "react"
import ImgCarousel from "./components/Carousel/ImgCarousel";
import Destinations from "./components/Destinations/Destinations";
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navebar/navbar";
import Search from "./components/Search/Search";
import Selects from "./components/Selects/Selects";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
<Navbar />
<Hero/>
<Destinations/>
<Search />
<Selects />
<ImgCarousel />
<Footer />
    </div> 
  );
}

export default App;
