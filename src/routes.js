import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Stock from "./pages/Stock";
import AdminPainel from "./pages/AdminPainel";
import NotFound from "./pages/NotFound";
import VehiclePage from "./pages/VehiclePage";
import Login from "./pages/Login";
import firebase from "./firebase";
import PreLoader from "./components/PreLoader";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      firebase.getCurrent() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);

const Routes = () => {
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);

  useEffect(() => {
    firebase.isInitialized().then((resultado) => {
      setFirebaseInitialized(resultado);
    });
  }, []);

  return firebaseInitialized !== false ? (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/stock" component={Stock} />
        <Route exact path="/stock/:id" component={VehiclePage} />
        <PrivateRoute exact path="/admin" component={AdminPainel} />
        <Route exact path="/login" component={Login} />
        <Route exact path="*" component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  ) : (
    <PreLoader />
  );
};

export default Routes;
