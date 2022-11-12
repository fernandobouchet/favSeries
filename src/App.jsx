import { useEffect, useState } from "react";
import Home from "./pages/Home";
import { getSeries } from "./utils/api";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getSeries().then((result) => setData(result));
  }, []);

  return <Home data={data} />;
}

export default App;
