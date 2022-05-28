import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Exp from "./components/experience/Exp";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navbar from "./components/nav/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
// import Services from "./components/services_/Services";
// import Testimonial from "./components/testmonials/Testimonial";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <About />
      <Exp />
      {/* <Services /> */}
      <Portfolio />
      {/* <Testimonial /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
