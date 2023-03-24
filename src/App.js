import { Fragment } from "react";
import { Routes, Route } from "react-router-loading";
import { BrowserRouter as Router } from "react-router-dom";
import { DefaultLayout } from "./layouts";
import { publicRoutes } from "~/routes";
function App() {
  return (
    <div className="App" style={{ backgroundColor: "black" }}>
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
                loading
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
