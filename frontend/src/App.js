import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/">
            <Nav />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
