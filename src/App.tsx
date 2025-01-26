import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailComponent from "./components/DetailComponent";
import HomeComponent from "./components/HomeComponent";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import { Link } from "react-router-dom";
import axios from "axios";

interface Person {
  name: string;
  birth: string;
  death: string;
  text: string;
  link: string;
  path: string;
}

const App = () => {
  const [data, setData] = useState<Person[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Person[]>(
          "https://api.huljak.cz/school/rekola-project"
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="main-wrapper">
        <BrowserRouter>
          <HeaderComponent />
          <h2 className="loader">Načítání...</h2>
          <FooterComponent />
        </BrowserRouter>
      </div>
    );
  }
  return (
    <div className="main-wrapper">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeaderComponent />
                <HomeComponent data={data} />
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
};

export default App;
