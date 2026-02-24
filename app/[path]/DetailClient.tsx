"use client";

interface Person {
  name: string;
  birth: string;
  death: string;
  text: string;
  link: string;
  path: string;
}

export default function DetailClient({ person }: { person: Person }) {
  return (
    <div className="info-wrapper">
      <h2
        onDoubleClick={() => {
          if (person.name.includes("Kuna")) {
            window.open(
              "https://suno.com/song/f47208ad-44c7-4d95-92ca-8c28faa04bfb"
            );
          }
          if (person.name.includes("Lasica")) {
            window.open("https://youtu.be/3Ha8WDmNdpU?si=c4ok6CDpNlaPSzIV");
          }
        }}
      >
        {person.name}
      </h2>
      <h3>
        * {person.birth} {person.death.length <= 0 ? "" : "† " + person.death}
      </h3>
      <p className="text-info">{person.text}</p>
      <a href={person.link} target="_blank" rel="noopener noreferrer">
        Více na Paměti národa
      </a>
    </div>
  );
}
