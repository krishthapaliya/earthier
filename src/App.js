import "./App.css";
import Navbar from "./components/NavbarElements";
import Hero from "./components/HeroSection";
import Home1 from "./components/Home1";
import Home2 from "./components/Home2";
import Home3 from "./components/Home3";
import Home4 from "./components/Home4";
import Home5 from "./components/Home5";
import Home6 from "./components/Home6";
import FAQSection from "./components/Faq";
import Footer from "./components/Footer";
import Home7 from "./components/Home7";

function App() {
  return (
    <div>
       <Navbar/>
      <Hero/>
      <Home1/>
      <Home2/>
      <Home3/>
      <Home4/>
      <Home5/>
      <Home6/>
      <Home7/>
      <FAQSection/>
      <Footer/>
    </div>
  );
}

export default App;
