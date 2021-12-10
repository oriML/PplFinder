import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { FavoritesProvider } from "Context/FavoritesContext";
import { ThemeProvider } from "theme";
import NavBar from "components/NavBar";
import routes from 'routes'

const AppRouter = () => {
  return (
    <ThemeProvider>
      <FavoritesProvider>
        <Router>
          <NavBar />
          <Switch>
            {
              routes.map(({ path, component }) => {
                return <Route exact key={path} path={path} component={component} />
              })
            }
          </Switch>
        </Router>
      </FavoritesProvider>
    </ThemeProvider>
  );
};

export default AppRouter;
