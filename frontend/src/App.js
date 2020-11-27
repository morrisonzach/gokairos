import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/about">
            <Nav />
          </Route>
          <Route path="/donate">
            <Nav />
          </Route>
          <Route path="/projects">
            <Nav />
          </Route>
          <Route path="/">
            <Nav />
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
