import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Serie from "./components/Serie";
import Home from "./pages/Home";
import { getSeries } from "./utils/api";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getSeries().then((result) => setData(result));
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/serie/:id" element={<Serie />} />
      </Routes>
    </>
  );
}

export default App;
