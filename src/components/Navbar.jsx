import githubLogo from '../../images/GitHub_Invertocat_White.png';
import linkedinLogo from '../../images/InBug-White.png';
import gmailLogo from '../../images/gmail.png';

const socialLinks = [
  {
    href: 'https://github.com/ohosman04',
    src: githubLogo,
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/ohosman04/',
    src: linkedinLogo,
    label: 'LinkedIn',
  },
  {
    href: 'mailto:omargawad9000@gmail.com',
    src: gmailLogo,
    label: 'Email',
  },
];

function Navbar() {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar__inner">
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
        <ul className="navbar__social">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={
                  link.href.startsWith('http')
                    ? 'noopener noreferrer'
                    : undefined
                }
                aria-label={link.label}
              >
                <img src={link.src} alt="" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
