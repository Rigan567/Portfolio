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

function App() {
  return (
    <>
      <Toaster />
      <Header />
      <Home />
      <Work />
      <Services />
      <Testimonials />
      <Timeline />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
