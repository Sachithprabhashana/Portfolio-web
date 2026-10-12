// src/sections/About.jsx
import profileImg from "../assets/profile.png"; // replace or remove if not available

export default function About({
  name = "Sachith",
  role1 = "Full Stack Developer",
  intro1 = "I am a passionate developer with extensive experience in the React,React Native and MERN stack, specializing in building responsive and dynamic web/mobile applications.",
  skills1 = [
    "React",
    "React Native",
    "Node.js",
    "Express",
    "MongoDB",
    "JavaScript",
    "redux",
    "Git",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Typescript",
  ],
  role2 = "Computer Vision Developer",
  intro2 = "Highly-focused Computer Vision Engineer developing intelligent image processing pipelines, object detection models, and real-time visual recognition systems.",
  skills2 = [
    "Computer Vision",
    "OpenCV",
    "Python",
    "TensorFlow",
    "PyTorch",
    "Image Processing",
    "Numpy",
    "Machine Learning",
  ],
  cvPath = "/resume.pdf",
}) {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = cvPath;
    link.download = `${name.replace(/\s+/g, "_")}_CV.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-left">
          <h2 className="about-heading">About Me</h2>

          <p className="about-role">{role1}</p>
          <p className="about-intro">{intro1}</p>

          <div className="about-skills" aria-label="Skills">
            {skills1.map((s) => (
              <span key={s} className="skill-pill">
                {s}
              </span>
            ))}
          </div>
          <p className="about-role">{role2}</p>
          <p className="about-intro">{intro2}</p>

          <div className="about-skills" aria-label="Skills">
            {skills2.map((s) => (
              <span key={s} className="skill-pill">
                {s}
              </span>
            ))}
          </div>

          <div className="about-actions">
            <button
              className="navbar-cv-btn"
              onClick={handleDownload}
              aria-label="Download CV"
            >
              Download CV
            </button>
          </div>
        </div>

        <aside className="about-right" aria-hidden="false">
          {profileImg ? (
            <img
              src={profileImg}
              alt={`Portrait of ${name}`}
              className="about-profile"
              loading="lazy"
            />
          ) : null}
        </aside>
      </div>
    </section>
  );
}
