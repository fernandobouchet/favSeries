import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Serie from "./pages/Serie";
import Home from "./pages/Home";
import { getSeries } from "./utils/api";
import Favoritas from "./pages/Favoritas";
import VerMasTarde from "./pages/VerMasTarde";
import {
  restoreSeriesFromLocalStorage,
  saveSeries,
} from "./utils/localStorage";
import Footer from "./components/Footer";

function App() {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const [misSeries, setmisSeries] = useState(restoreSeriesFromLocalStorage());

  useEffect(() => {
    getSeries(page).then((result) => setData(result));
  }, [page]);

  useEffect(() => {
    saveSeries(misSeries);
  }, [misSeries]);

  return (
    <>
      <Header misSeries={misSeries} />
      <Routes>
        <Route path="/" element={<Home data={data} setPage={setPage} />} />
        <Route
          path="/serie/:id"
          element={<Serie misSeries={misSeries} setmisSeries={setmisSeries} />}
        />
        <Route
          path="/favoritas"
          element={<Favoritas data={misSeries.favoritas} />}
        />
        <Route
          path="/ver-mas-tarde"
          element={<VerMasTarde data={misSeries.verMasTarde} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
