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
import { useEffect, useState } from "react";
import HeaderPhone from "./Components/HeaderPhone";
import { ThemeProvider } from "./Theme-context";
import Preloader from "./Components/Preloader";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

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
  useEffect(() => {
    // Simulate a loading delay
    setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds delay for demonstration
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
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
      )}
    </>
  );
}

export default App;
