import "./main-page.css";
import { useEffect, useMemo, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./header";
import FeaturedHouse from "./featured-house";

function App() {
  const [allHouses, setAllHouses] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      const rsp = await fetch("/houses.json");
      const houses = await rsp.json();
      setAllHouses(houses);
    };
    fetchHouses();
  }, []);

  const featuredHouse = useMemo(() => {
    if (allHouses.length) {
      const randomIndex = Math.floor(Math.random() * allHouses.length);
      return allHouses[randomIndex];
    }
  }, [allHouses]);

  return (
    <Router>
      <div className="container">
        <Header subtitle="Providing houses all over the world" />
      </div>

      {/*Routes use to be switches*/}
      <Routes>
        <Route path="/" element={<FeaturedHouse house={featuredHouse} />} />
        {/* Old Way
        <Route path="/">
          <FeaturedHouse house={featuredHouse} />
        </Route> */}
      </Routes>
    </Router>
  );
}

export default App;