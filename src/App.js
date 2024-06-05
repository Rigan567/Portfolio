import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Services from "./Components/Services";
import Testimonials from "./Components/Testimonials";
import Timeline from "./Components/Timeline";
import Work from "./Components/Work";
import { Toaster } from "react-hot-toast";
import "./styles/app.scss";
import Footer from "./Components/Footer";
import { useState } from "react";
import HeaderPhone from "./Components/HeaderPhone";
import { ThemeProvider } from "./Theme-context";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // const [ratio, setRatio] = useState(window.innerWidth / window.innerHeight);
  // console.log(ratio);

  // useEffect(() => {
  //   const resizeRatio = () => {
  //     setRatio(window.innerWidth / window.innerHeight);
  //   };
  //   window.addEventListener("resize", resizeRatio);
  //   return () => {
  //     window.removeEventListener("resize", resizeRatio);
  //   };
  // }, [ratio]);

  return (
    <>
      <ThemeProvider>
        <Toaster />
        <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <Work />
        <Services />
        <Testimonials />
        <Timeline />
        <Contact />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
