import logo from "./linkedin.png";

const Contact = () => {
  return (
    <div className="contact-container">
      <span className="page-heading">Contact Me</span>
      <p>
        I am looking for a new opportunity, feel free to contact me and get to
        know more information.
      </p>
      <p>Sweety Mahale </p>
      <p>email: sweeti.jojare@gmail.com</p>
      <p>contact number: 740-513-0542</p>
      <p>
        {" "}
        <a href="https://www.linkedin.com/in/sweeti-m/">
          <img src={logo} alt="logo" />{" "}
        </a>
      </p>
    </div>
  );
};
export default Contact;
