import axiosClient from "~/api/axiosClient";

export const apiService = {
  getImage: (path) => `https://image.tmdb.org/t/p/original/${path}`,
  getImgW500: (path) => `https://image.tmdb.org/t/p/w500/original${path}`,
  getMovieType: (type, params) => {
    const url = "movie/" + type;
    return axiosClient.get(url, { params });
  },
  getTrending: (type, time, params) => {
    const url = "trending/" + type + "/" + time;
    return axiosClient.get(url, { params });
  },
  searchMovie: (params) => {
    const url = "search/movie";
    return axiosClient.get(url, { params });
  },
};
