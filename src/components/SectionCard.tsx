interface SectionCardProps {
  title?: string;
  subtitle?: string;
  text: string;
}

const SectionCard: React.FC<SectionCardProps> = ({
  title,
  subtitle,
  text,
}): JSX.Element => {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <h4 className="card-subtitle">{subtitle}</h4>
      <p>{text}</p>
    </div>
  );
};
export default SectionCard;
