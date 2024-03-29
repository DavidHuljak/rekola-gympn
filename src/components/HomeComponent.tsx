import data from "../assets/data.json";
import { Link } from "react-router-dom";

const HomeComponent = () => {
  return (
    <div>
      <div className="info-wrapper">
        <div className="info">
          Studenti Gymnázia Paměti národa a společnost Rekola vám s potěšením
          oznamují nově vzniklý historicky vzdělávací projekt;{" "}
          <strong>Pamětníci na Rekolech </strong>. Tato nová iniciativa studentů
          3. ročníku gymnázia spojuje vzdělávání a poznávání kulturního i
          historického aspektu naší krásné země s cílem připomenout si
          pamětníky, kteří stále odehrávají klíčovou roli v naší historii.
        </div>
        <a
          href="https://gymnazium.pametnaroda.cz/2024/03/27/pametnici-na-rekolech/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Čtěte více na stránkách Gymnázia Paměti národa
        </a>
      </div>
      <div className="card-wrapper">
        {data.map((person, index) => (
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
