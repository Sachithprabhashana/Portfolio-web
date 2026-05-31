// import heroImg from "./assets/hero.png";
// import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <div className="nav">
          <h1>Sachith Prabhashana</h1>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <section className="hero">
          {/* <img src={heroImg} alt="Hero" /> */}
          <h2>Welcome to My Portfolio</h2>
          <p>Discover my projects and skills.</p>
        </section>

        <section id="about">
          <h2>About Me</h2>
          <p>
            I am a passionate developer with experience in React with MERN stack
            development
          </p>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <ul>
            <li>Project 1</li>
            <li>Project 2</li>
          </ul>
        </section>

        <section id="contact">
          <h2>Contact Me</h2>
          <p>
            Email:{" "}
            <a href="mailto:youremail@example.com">youremail@example.com</a>
          </p>
        </section>
      </div>
    </>
  );
}

export default App;
