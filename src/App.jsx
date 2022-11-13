import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Serie from "./components/Serie";
import Home from "./pages/Home";
import { getSeries } from "./utils/api";

function App() {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getSeries(page).then((result) => setData(result));
  }, [page]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home data={data} setPage={setPage} />} />
        <Route path="/serie/:id" element={<Serie />} />
      </Routes>
    </>
  );
}

export default App;
