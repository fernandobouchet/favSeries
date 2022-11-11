import { useEffect, useState } from "react";
import { getBand } from "./utils/api";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getBand().then((result) => setData(result));
  }, []);

  console.log(data);

  return (
    <div>
      <h1>Vite!</h1>
      <div>
        {data &&
          data.data.results.map((track) => (
            <>
              <h1>{track.name}</h1>
              <img
                src={`https://image.tmdb.org/t/p/original/${track.poster_path}`}
                alt=""
              />
            </>
          ))}
      </div>
    </div>
  );
}

export default App;
