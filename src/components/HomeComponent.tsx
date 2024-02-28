import data from "../assets/data.json";
import { Link } from "react-router-dom";

const HomeComponent = () => {
  return (
    <div>
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
