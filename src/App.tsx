import { BrowserRouter, Routes, Route } from "react-router-dom";
import data from "./assets/data.json";
import DetailComponent from "./components/DetailComponent";
import HomeComponent from "./components/HomeComponent";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import { Link } from "react-router-dom";

const App = () => (
  <div className="main-wrapper">
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeaderComponent />
              <HomeComponent />
              <FooterComponent />{" "}
            </>
          }
        />
        {data.map((person, index) => (
          <Route
            key={index}
            path={`/${person.path}`}
            element={
              <>
                <HeaderComponent />
                <DetailComponent
                  name={person.name}
                  birth={"* " + person.birth}
                  death={person.death.length <= 0 ? "" : "† " + person.death}
                  text={person.text}
                  link={person.link}
                />
                <FooterComponent />
              </>
            }
          />
        ))}
        <Route
          path="*"
          element={
            <>
              <HeaderComponent />
              <h2 className="not-found">Stránka nenalezena.</h2>
              <Link to="/" replace />
              <FooterComponent />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
