// src/sections/About.jsx
import profileImg from "../assets/profile.png"; // replace or remove if not available

export default function About({
  name = "Sachith",
  role = "Full Stack Developer",
  intro = "I am a passionate developer with experience in React and MERN stack development.",
  skills = ["React", "Node.js", "Express", "MongoDB", "JavaScript"],
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

          <p className="about-role">{role}</p>
          <p className="about-intro">{intro}</p>

          <div className="about-skills" aria-label="Skills">
            {skills.map((s) => (
              <span key={s} className="skill-pill">
                {s}
              </span>
            ))}
          </div>
          <p className="about-role">{role}</p>
          <p className="about-intro">{intro}</p>

          <div className="about-skills" aria-label="Skills">
            {skills.map((s) => (
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
