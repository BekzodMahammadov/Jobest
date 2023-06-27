import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Begin from "./components/Begin";
import Category from "./components/Category";
import About from "./components/About";
import JoinUs from "./components/Join Us";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Begin />
      <Category />
      <About />
      <JoinUs />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
