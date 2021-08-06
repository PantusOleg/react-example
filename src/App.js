import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Main } from "./pages/Main";
import { Tabs } from "./pages/Tabs";
import "./App.css";

const AppRouter = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/tabs">
          <Tabs />
        </Route>
      </Switch>
    </div>
  );
};

export const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </BrowserRouter>
  );
};
