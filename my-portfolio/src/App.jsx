import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: "76px" }}>
        {" "}
        {/* Prevents the navbar from overlapping your text content */}
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
