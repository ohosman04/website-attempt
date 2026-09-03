import LinkButton from './LinkButton';

const socialLinks = [
  {
    className: 'resume',
    action: 'https://drive.google.com/file/d/1T2l_D0PmP3BAmaJtDP6R2w2yeld-DMMh/view?usp=sharing',
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
