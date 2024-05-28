import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Services from "./Components/Services";
import Testimonials from "./Components/Testimonials";
import Timeline from "./Components/Timeline";
import Work from "./Components/Work";
import "./styles/app.scss";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Work />
      <Services />
      <Testimonials />
      <Timeline />

      <Contact />
    </>
  );
}

export default App;
