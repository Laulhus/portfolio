interface TechIconProps {
  icon: string;
  name: string;
}
const TechIcon: React.FC<TechIconProps> = ({ icon, name }): JSX.Element => {
  return (
    <div>
      <img src={icon}></img>
      <p>{name}</p>
    </div>
  );
};
export default TechIcon;
