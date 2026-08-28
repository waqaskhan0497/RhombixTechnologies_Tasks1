import { useState } from "react";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Git & GitHub",
  "Digital Marketing",
  "Graphic Designing",
  "AI Tools",
  "Data Entry",
];

const education = [
  {
    title: "Matric",
    place: "Fauji Foundation Model School and College, Peshawar",
  },
  {
    title: "FSc",
    place: "PMDC, Hayatabad",
  },
  {
    title: "Bachelor's Degree",
    place: "CECOS University — Currently studying, 5th Semester",
  },
];

const certifications = [
  "English Language Certificate",
  "Web Development Certificate",
  "Digital Marketing Certificate",
  "Graphic Designing Certificate",
  "AI Certificate",
];

const experience = [
  {
    title: "Digital Marketing & IT",
    place: "Mufta Chemical PVT LTD",
    text: "Experience working in digital marketing and IT-related tasks in a professional environment.",
  },
  {
    title: "Data Entry",
    place: "Professional Experience",
    text: "Experience with accurate data entry, organizing information and handling routine computer-based tasks.",
  },
  {
    title: "Web Development",
    place: "Personal Projects",
    text: "Experience building web applications using HTML, CSS, JavaScript and React.",
  }
];

const projects = [
  { title: "Admin Dashboard", text: "A responsive dashboard with role and permission management." },
  { title: "To-Do Application", text: "A task manager with add, edit, delete and localStorage features." },
  { title: "Portfolio Website", text: "A modern personal portfolio designed with React and responsive CSS." },
  { title: "E-commerce Store", text: "A simple online store with product listing, cart and checkout functionality." },
  { title: "Hotel Booking App", text: "A hotel booking application with search, filter and booking features." },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [photoError, setPhotoError] = useState(false);

  return (
    <>
      <header>
        <div className="nav">
          <a className="logo" href="#home">MW.</a>
          <button
            className="menu"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            ☰
          </button>
          <nav className={menuOpen ? "show" : ""}>
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
            <a href="#certifications" onClick={() => setMenuOpen(false)}>Certificates</a>
            <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
            <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div>
            <p className="eyebrow">HELLO, I AM</p>
            <h1>Muhammad Waqas</h1>
            <h2>Web Developer & Digital Marketing Enthusiast</h2>
            <p className="intro">
              I build clean, responsive and user-friendly web applications. I am also experienced in digital marketing, IT tasks and data entry, and I am continuously improving my technical skills.
            </p>
            <a className="btn" href="#contact">Contact Me</a>
          </div>

          <div className="profile-wrap">
            {!photoError ? (
              <img
                className="profile-photo"
                src="/profile.jpg"
                alt="Muhammad Waqas"
                onError={() => setPhotoError(true)}
              />
            ) : (
              <div className="profile fallback-profile">MW</div>
            )}
          </div>
        </section>

        <section id="about">
          <p className="section-label">ABOUT ME</p>
          <h2>Building my future through technology.</h2>
          <p>
            I am a web developer and university student who enjoys building practical digital solutions. Along with web development, I have experience in digital marketing, IT-related work and data entry. My goal is to keep learning modern technologies and use my skills in real-world projects.
          </p>
        </section>

        <section id="education" className="alt">
          <p className="section-label">EDUCATION</p>
          <h2>My educational journey</h2>
          <div className="info-grid">
            {education.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.place}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="certifications">
          <p className="section-label">CERTIFICATIONS</p>
          <h2>Courses & certificates</h2>
          <div className="cert-list">
            {certifications.map((certificate) => (
              <article className="cert-card" key={certificate}>
                <div className="card-icon">✓</div>
                <h3>{certificate}</h3>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="alt">
          <p className="section-label">MY SKILLS</p>
          <h2>Technologies & professional skills</h2>
          <div className="skills">
            {skills.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </section>

        <section id="experience">
          <p className="section-label">EXPERIENCE</p>
          <h2>Professional experience</h2>
          <div className="info-grid experience-grid">
            {experience.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p className="muted">{item.place}</p>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="alt">
          <p className="section-label">PROJECTS</p>
          <h2>Recent work</h2>
          <div className="cards">
            {projects.map((project) => (
              <article className="card" key={project.title}>
                <div className="card-icon">⌘</div>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
                <a href="#contact">View Details →</a>
              </article>
            ))}
          </div>
        </section>

        <section className="achievements">
          <p className="section-label">ACHIEVEMENTS</p>
          <h2>Goals & contributions</h2>
          <div className="info-grid">
            <article><h3>🎯 Career Goal</h3><p>To grow as a full-stack/web professional and gain more real-world project experience.</p></article>
            <article><h3>📚 Continuous Learning</h3><p>Learning modern web development, AI tools, digital marketing and other practical technologies.</p></article>
              <article><h3>🏆 Awards</h3><p>Add awards, honors and competition achievements here.</p></article>
            <article><h3>💬 Testimonials</h3><p>“Hardworking, motivated and always willing to learn.”</p></article>
        <article><h3>🤝 Professional Growth</h3><p>Building practical projects and improving communication, problem-solving and teamwork skills.</p></article>
          </div>
        </section>

        <section id="contact" className="contact">
          <p className="section-label">CONTACT</p>
          <h2>Let's work together</h2>
          <p>Replace the email below with your real email address.</p>
          <p>Phone: +92 3251704971</p>
          <p>Email: muhammad.waqas.bscs-2024b@cecosion.edu.pk</p>
          <div className="links">
            <a href="https://github.com/waqaskhan0497" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/muhammad-waqas-a93876341/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </section>
      </main>

      <footer>© 2026 Muhammad Waqas. Built with React.</footer>
    </>
  );
}
