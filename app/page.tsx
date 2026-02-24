import Link from "next/link";
import { getData, Person } from "./actions";

export default async function Home() {
  const data = await getData();

  return (
    <div>
      <div className="info-wrapper">
        <div className="info">
          Studenti Gymnázia Paměti národa a společnost Rekola vám s potěšením
          oznamují nově vzniklý historicky vzdělávací projekt -{" "}
          <strong>Pamětníci na Rekolech</strong>. <br />
          <br />
          Tato nová iniciativa studentů 3. ročníku gymnázia spojuje vzdělávání a
          poznávání kulturního i historického aspektu naší krásné země s cílem
          připomenout si pamětníky, kteří stále odehrávají klíčovou roli v naší
          historii. <br />
          <br />
          <a
            target="_blank"
            rel="noopener noreferrer"
            style={{ cursor: "pointer" }}
            href="/tz_regpn.pdf"
            className="tz-link"
          >
            Čtěte více v tiskové zprávě
          </a>
        </div>
      </div>
      <div className="card-wrapper">
        {data.map((person: Person, index: number) => (
          <div key={index} className="card">
            <Link href={`/${person.path}`} className="card-link">
              {person.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
