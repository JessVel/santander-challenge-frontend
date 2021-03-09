import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import LogIn from "./components/auth/LogIn";
import SingIn from "./components/auth/SingIn";
import Home from "./components/Home/Home";
import Welcome from "./components/Welcome/Welcome";

import AuthState from './context/auth/authState';

function App() {
  const history = useHistory();
  return (
    <AuthState>
    <Router>
      <Switch history={history}>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/singin" component={SingIn} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </Router>
    </AuthState>
  );
}

export default App;
