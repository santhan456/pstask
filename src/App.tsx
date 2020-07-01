import * as React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Container from "./components/Container";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Provider store={store}>
    <Router>
        <React.Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Container}/>
          <Route path="/:page" component={Container}/>
        </Switch>
      </React.Suspense>
    </Router>
    </Provider>
  );
}

export default App;
