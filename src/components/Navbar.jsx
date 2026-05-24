function Navbar() {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <ul className="navbar__list">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1G6vlfY67D2Ot4K_N8Q6bKQONP02uhlPC/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </li>
        <li>
          <a href="#gallery">Gallery</a>
        </li>
        <li>
          <a
            href="#"
            className="navbar__link--inactive"
            onClick={(e) => e.preventDefault()}
          >
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
