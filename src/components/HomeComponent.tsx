import { Link } from "react-router-dom";

interface Person {
  name: string;
  birth: string;
  death: string;
  text: string;
  link: string;
  path: string;
}

const HomeComponent: React.FC<{ data: Person[] }> = ({ data }) => {
  return (
    <div>
      <div className="info-wrapper">
        <div className="info">
          Studenti Gymnázia Paměti národa a společnost Rekola vám s potěšením
          oznamují nově vzniklý historicky vzdělávací projekt;{" "}
          <strong>Pamětníci na Rekolech</strong>. Tato nová iniciativa studentů
          3. ročníku gymnázia spojuje vzdělávání a poznávání kulturního i
          historického aspektu naší krásné země s cílem připomenout si
          pamětníky, kteří stále odehrávají klíčovou roli v naší historii.
        </div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          style={{ cursor: "pointer" }}
          onClick={() =>
            alert(
              "Z důvodu osobní nepohody ředitelky školy byl tento projekt z její strany zakázán."
            )
          }
        >
          Čtěte více na stránkách Gymnázia Paměti národa
        </a>
      </div>
      <div className="card-wrapper">
        {data.map((person: Person, index: number) => (
          <div key={index} className="card">
            <Link to={`/${person.path}`} className="card-link">
              {person.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeComponent;
