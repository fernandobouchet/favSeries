import axios from "axios";

const getSeries = async (page) => {
  try {
    const data = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${
        import.meta.env.VITE_APP_API_KEY
      }&language=es-MEX&sort_by=popularity.desc&vote_count.gte=1400&watch_region=AR&page=1&with_watch_providers=8|119|384&without_genres=10762,16&first_air_date.gte=2000-01-01`,
      {
        params: {
          page: page,
        },
      }
    );
    if (data.status === 200) {
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const getSerie = async (id) => {
  try {
    const data = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${
        import.meta.env.VITE_APP_API_KEY
      }&language=es-MEX`
    );
    if (data.status === 200) {
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export { getSeries, getSerie };
