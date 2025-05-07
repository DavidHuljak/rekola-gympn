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
    <div className="info-wrapper">
      <h2
        onDoubleClick={() => {
          if (name.includes("Kuna")) {
            window.open(
              "https://suno.com/song/f47208ad-44c7-4d95-92ca-8c28faa04bfb"
            );
          }
          if (name.includes("Lasica")) {
            window.open("https://youtu.be/3Ha8WDmNdpU?si=c4ok6CDpNlaPSzIV");
          }
        }}
      >
        {name}
      </h2>
      <h3>
        {birth} {death}
      </h3>
      <p className="text-info">{text}</p>
      <a href={link} target="_blank">
        Více na Paměti národa
      </a>
    </div>
  );
};

export default DetailComponent;
