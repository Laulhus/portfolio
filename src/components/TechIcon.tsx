interface TechIconProps {
  icon: string;
  name: string;
  url: string;
}
const TechIcon: React.FC<TechIconProps> = ({
  icon,
  name,
  url,
}): JSX.Element => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <div className="tech-icon-container">
        <img className="logo" width={80} height={80} src={icon}></img>
        <p>{name}</p>
      </div>
    </a>
  );
};
export default TechIcon;
