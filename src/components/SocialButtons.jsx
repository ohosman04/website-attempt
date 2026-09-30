import LinkButton from './LinkButton';

const socialLinks = [
  {
    className: 'resume',
    action: '/website-attempt/resume.pdf',
    value: 'Resume',
  },
  {
    className: 'Github',
    action: 'https://github.com/ohosman04',
    value: 'Github',
  },
  {
    className: 'LinkedIn',
    action: 'https://www.linkedin.com/in/ohosman04/',
    value: 'LinkedIn',
  },
];

function SocialButtons() {
  return (
    <section className="buttons">
      {socialLinks.map((link) => (
        <LinkButton
          key={link.className}
          className={link.className}
          action={link.action}
          value={link.value}
        />
      ))}
    </section>
  );
}

export default SocialButtons;
