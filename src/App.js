import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomeScreen from './components/screens/HomeScreen';
import QuizScreen from './components/screens/QuizScreen';
import ResultsScreen from './components/screens/ResultsScreen';
import { store } from "./redux";
import { Provider } from "react-redux";

function App() {
  return <Provider store={store}>
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact={true}>
            <HomeScreen />
          </Route>
          <Route path="/quiz">
            <QuizScreen />
          </Route>
          <Route path="/results">
            <ResultsScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  </Provider>
}

export default App;
