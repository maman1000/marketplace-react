import logo from "../assets/icon/kotak2.png";

function Navbar() {
  return (
    <header>
      <nav className="nav-container">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="DibiTech Logo" />
          <a href="#">DibiTech</a>
        </div>

        {/* Menu sebelah kanan */}
        <div className="nav-right">
          <div className="nav-list">
            <ul>
              <li className="nav-list-item">
                <a href="#">Explore</a>
              </li>

              <li className="nav-list-item">
                <a href="#">Categories</a>
              </li>

              <li className="nav-list-item">
                <a href="#">Cart</a>
              </li>
            </ul>
          </div>

          <div className="btn-navbar">
            <button className="btn-login">LOGIN</button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
