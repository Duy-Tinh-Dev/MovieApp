// import { useEffect } from "react";
// import { moviesService } from "./services";
import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts";
import { publicRoutes } from "~/routes";
function App() {
  // const getPopularFilm = async () => {
  //   const params = { name: "123" };
  //   const data = await moviesService.getMovieType("popular", params);
  //   console.log(data);
  // };

  // useEffect(() => {
  //   getPopularFilm();
  // }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          {publicRoutes.map((route) => {
            let Layout = DefaultLayout;
            const Page = route.page;
            if (route.layout === null) {
              Layout = Fragment;
            } else if (route.layout) {
              Layout = route.layout;
            }
            return (
              <Route
                key={route.id}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              ></Route>
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
