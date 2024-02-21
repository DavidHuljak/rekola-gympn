import { BrowserRouter, Routes, Route } from "react-router-dom";
import rekolaData from "./assets/data.json";
import DetailComponent from "./components/DetailComponent";
import HomeComponent from "./components/HomeComponent";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";

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
        {rekolaData.map((rekola, index) => (
          <Route
            key={index}
            path={`/${rekola.path}`}
            element={
              <>
                <HeaderComponent />
                <DetailComponent
                  name={rekola.name}
                  birth={rekola.birth}
                  death={"-"}
                  text={rekola.text}
                  link={rekola.link}
                />
                <FooterComponent />
              </>
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
