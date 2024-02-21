import rekolaData from "../assets/data.json";
import { Link } from "react-router-dom";

const HomeComponent = () => {
  return (
    <div>
      <p className="main-text">
        Studenti Gymnázia Paměti národa a společnost Rekola vám s potěšením
        oznamují nově vzniklý historicky vzdělávací projekt; Pamětníci na
        Rekolech. Tato nová iniciativa studentů 3. ročníku gymnázia spojuje
        vzdělávání a poznávání kulturního i historického aspektu naší krásné
        země s cílem připomenout si pamětníky, kteří stále odehrávají klíčovou
        roli v naší historii.
      </p>
      <br />
      <p className="main-text">
        V rámci semináře Paměť národa studenti pojmenovali 23 sdílených kol
        provozovaných společností Rekola podle osobností, které zažili významné
        události československých dějin, v rámci databáze Paměti národa. Každý
        pamětník byl vybrán na základě výběru studentů gymnázia Paměti národa, a
        dále konzultován s vedoucím práce, odborníkem na 20. století z Post
        Bellum. Jednotliví pamětníci mají za cíl reprezentovat jednotlivá
        palčivá témata moderních dějin Česka. Ať se jedná o sudetské Němce, jenž
        prožili během jejich života různé etapy česko-německého pohraničního
        soužití, poúnorový československý disidenty, či uprchlíky, jenž do
        Československa přijeli hledat své zázemí před válkou. Tato iniciativa má
        za cíl propojit mladou generaci s tou starší díky atraktivnímu
        alternativnímu městskému způsobu mobility - sdílená kola. Společnost
        Rekola přislíbila podporovat tuto iniciativu poskytováním speciálně
        zajištěných kol a technické podpory pro udržení pojmenovaných kol v
        optimálním stav.
      </p>
      <div className="card-wrapper">
        {rekolaData.map((rekola, index) => (
          <div key={index} className="card">
            <Link to={`/${rekola.path}`} className="card-link">
              {rekola.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeComponent;
