import axios from "axios";

const getBand = async () => {
  try {
    const data = await axios.get(
      "https://api.themoviedb.org/3/tv/popular?api_key=af600b375b4395a206a3064ab66e7868&language=es-AR&page=1"
    );
    if (data.status === 200) {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

export { getBand };
