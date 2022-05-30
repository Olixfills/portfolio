import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Exp from "./components/experience/Exp";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navbar from "./components/nav/Navbar";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <About />
      <Exp />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
