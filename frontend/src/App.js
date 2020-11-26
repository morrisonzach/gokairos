import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <Switch>
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
