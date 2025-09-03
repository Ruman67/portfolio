import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import "./index.css";

export default function App() {
  return (
    <div>
      <Navbar />
      <main className="container"></main>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Publications />
      <Contact />
      <Footer />
    </div>
  );
}
