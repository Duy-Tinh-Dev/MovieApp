import { DefaultLayout, HeaderOnly } from "~/layouts";
import { Home, Setting, WatchFilm, Movie, Tv } from "~/pages";
import config from "~/config";
const publicRoutes = [
  {
    id: 1,
    name: "Home",
    path: config.routes.home,
    page: Home,
    layout: DefaultLayout,
  },
  {
    id: 2,
    name: "Setting",
    path: config.routes.setting,
    page: Setting,
    layout: HeaderOnly,
  },
  {
    id: 3,
    name: "watch Film",
    path: config.routes.watchFilm,
    page: WatchFilm,
    layout: null,
  },
  {
    id: 4,
    name: "movie Film",
    path: config.routes.movie,
    page: Movie,
  },
  {
    id: 5,
    name: "watch Film",
    path: config.routes.tv,
    page: Tv,
  },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
