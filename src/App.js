import './App.css';
import Register from './Register.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Otp from './Otp';
import Login from './Login';
import Welcome from './Welcome';
import Next from './Next';

function App() {
  return (
    <div className="app">
    <Router>
      <div>
        <Switch>

        <Route path="/otp">
        <Otp />
        </Route>

        <Route path="/login">
        <Login />
        </Route>

        <Route path="/welcome">
        <Welcome />
        </Route>

        <Route path="/next">
        <Next />
        </Route>

          <Route path="/">
          <Register />
          </Route>

        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
