import githubIcon from "../assets/github.svg";
import mailIcon from "../assets/mail.svg";
import linkedInIcon from "../assets/linkedin.svg";

interface ContactCardProps {
  mail?: string;
  github?: string;
  linkedIn: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  mail,
  github,
  linkedIn,
}): JSX.Element => {
  return (
    <div className="card">
      <h3 className="card-title">Contact</h3>
      <div className="contact-row">
        <img src={mailIcon} />
        <a href={`mailto:${mail}`}>
          <p>{mail}</p>
        </a>
      </div>
      <div className="contact-row">
        <img src={githubIcon} />
        <a href={github} target="_blank" rel="noreferrer">
          <p>Github/Laulhus</p>
        </a>
      </div>
      <div className="contact-row">
        <img src={linkedInIcon} />
        <a href={linkedIn} target="_blank" rel="noreferrer">
          <p>LinkedIn/edgaralcolea</p>
        </a>
      </div>
    </div>
  );
};
export default ContactCard;
