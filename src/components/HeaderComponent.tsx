import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <div>
      <h1>
        <Link to="/" className="header">
          Pamětníci na rekolech
        </Link>
      </h1>
    </div>
  );
};

export default HeaderComponent;
