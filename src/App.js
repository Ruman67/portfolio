import React, { useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function App() {
  const [activeTab, setActiveTab] = useState("about");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form, "YOUR_PUBLIC_KEY")
      .then(
        () => {
          alert("Message sent successfully!");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("Failed to send message: " + error.text);
        }
      );
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.title}>Ruman Maharjan</h1>
        <TypeAnimation
          sequence={[
            "Hello",
            1500,
            "I",
            1500,
            "am",
            1500,
            "Ruman Maharjan",
            1500,
          ]}
          wrapper="span"
          speed={50}
          style={styles.subtitle}
          repeat={Infinity}
        />
      </header>

      {/* Tabs */}
      <nav style={styles.nav}>
        <button
          style={activeTab === "about" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("about")}
        >
          About
        </button>
        <button
          style={activeTab === "projects" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("projects")}
        >
          Projects
        </button>
        <button
          style={activeTab === "contact" ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab("contact")}
        >
          Contact
        </button>
      </nav>

      {/* Content */}
      <main style={styles.content}>
        {activeTab === "about" && (
          <motion.div
            style={styles.card}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h2>About Me</h2>
            <p>
              Hi, I'm Ruman, a passionate developer who loves building
              responsive applications, creating interactive UIs, exploring
              modern web technologies, and working with Unity and C#and ensuring
              high-quality standards through QA practices
            </p>
            <a href="/cv.pdf" style={styles.downloadBtn} download>
              Download CV
            </a>
          </motion.div>
        )}

        {activeTab === "projects" && (
          <motion.div
            style={styles.card}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h2>Projects</h2>
            <ul>
              <li>✔IOE Overflow</li>
              <li>✔ Brain Tumor Detection Research </li>
              <li> ✔Digital Book using Unity</li>
            </ul>
          </motion.div>
        )}

        {activeTab === "contact" && (
          <motion.div
            style={styles.card}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                style={styles.input}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                style={styles.input}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                style={styles.textarea}
                required
              />
              <button type="submit" style={styles.sendBtn}>
                Send Message
              </button>
            </form>
          </motion.div>
        )}
      </main>

      {/* Social Icons */}
      <div style={styles.socialContainer}>
        <a
          href="https://github.com/Ruman67"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.icon}
        >
          <FaGithub size={28} />
        </a>
        <a
          href="https://www.linkedin.com/in/ruman-maharjan-968a1a1b8/"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.icon}
        >
          <FaLinkedin size={28} />
        </a>
        <a href="mailto:rumanmaharjan770@gmail.com" style={styles.icon}>
          <FaEnvelope size={28} />
        </a>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#000",
    color: "#0f0",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    fontFamily: "'Courier New', monospace",
    padding: "20px",
    position: "relative",
  },
  header: { textAlign: "center", marginBottom: "20px" },
  title: { fontSize: "3rem", margin: 0, textShadow: "0 0 15px #0f0" },
  subtitle: {
    display: "block",
    fontSize: "1.2rem",
    marginTop: "10px",
    color: "#0f0",
  },
  nav: { display: "flex", justifyContent: "center", marginBottom: "20px" },
  tab: {
    background: "transparent",
    color: "#0f0",
    border: "1px solid #0f0",
    padding: "10px 15px",
    margin: "0 5px",
    cursor: "pointer",
  },
  activeTab: {
    background: "#0f0",
    color: "#000",
    border: "1px solid #0f0",
    padding: "10px 15px",
    margin: "0 5px",
    cursor: "pointer",
  },
  content: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#111",
    border: "1px solid #0f0",
    borderRadius: "10px",
    padding: "20px",
    width: "90%",
    maxWidth: "500px",
    textAlign: "center",
  },
  downloadBtn: {
    display: "inline-block",
    marginTop: "15px",
    padding: "10px 15px",
    background: "#0f0",
    color: "#000",
    textDecoration: "none",
    borderRadius: "5px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginTop: "10px",
  },
  input: {
    padding: "10px",
    background: "#000",
    color: "#0f0",
    border: "1px solid #0f0",
  },
  textarea: {
    padding: "10px",
    background: "#000",
    color: "#0f0",
    border: "1px solid #0f0",
    height: "100px",
  },
  sendBtn: {
    padding: "10px",
    background: "#0f0",
    color: "#000",
    border: "none",
    cursor: "pointer",
  },
  socialContainer: {
    position: "absolute",
    bottom: "20px",
    left: "20px",
    display: "flex",
    gap: "15px",
  },
  icon: { color: "#0f0" },
};
