import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home.jsx";
import Testimonial from "./components/Testimonial/Testimonial";
import Tour from "./components/Tour/Tour.jsx";
function App() {
  return (
    <div className="App">
      <Home />
      <Tour />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
