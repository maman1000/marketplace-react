import twitter from "../assets/icon/twitter.svg";
import instagram from "../assets/icon/instagram.svg";
import facebook from "../assets/icon/facebook.svg";

function Footer() {
  return (
    <section id="footer">
      <footer className="footer-container">
        <div className="footer-links">
          <a href="#">About Us</a>
          <a href="#">Contact</a>
          <a href="#">Terms Of Service</a>
          <a href="#">Privacy Policy</a>
        </div>

        <div className="footer-social">
          <a href="#">
            <img src={twitter} alt="Twitter" />
          </a>

          <a href="#">
            <img src={instagram} alt="Instagram" />
          </a>

          <a href="#">
            <img src={facebook} alt="Facebook" />
          </a>
        </div>

        <p className="footer-copy">© 2026 DibiTech. All rights reserved.</p>
      </footer>
    </section>
  );
}

export default Footer;
