import "./Contact.css";
export default function Contact() {
  return (
    <section id="contact" className="contact">
      {" "}
      <h2 className="section-title"> Contact</h2>{" "}
      <p className="contact-text">
        {" "}
        I’m currently looking for new opportunities — my inbox is always open.
        Whether you have a question, a project idea, or just want to say hi,
        I’ll try my best to get back to you!{" "}
      </p>{" "}
      <a href="mailto:rumanmaharjan770@gmail.com" className="contact-button">
        {" "}
        Say Hello{" "}
      </a>{" "}
    </section>
  );
}
