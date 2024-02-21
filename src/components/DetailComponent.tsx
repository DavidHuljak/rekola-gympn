interface DetailComponentProps {
  name: string;
  birth: string;
  death: string;
  text: string;
  link: string;
}

const DetailComponent = ({
  name,
  birth,
  death,
  text,
  link,
}: DetailComponentProps) => {
  return (
    <div className="detail-wrapper">
      <h2>{name}</h2>
      <h3>*{birth + death}</h3>
      <p>{text}</p>
      <a href={link} target="_blank">
        Více na Paměti národa
      </a>
    </div>
  );
};

export default DetailComponent;
