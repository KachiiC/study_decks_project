import React from 'react';
// Components
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
// CSS
import './App.css';
// Pages
import Home from './Pages/Home'
import StudyArea from './Pages/StudyArea';

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/studyarea">
            <StudyArea />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
