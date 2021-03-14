import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import LogIn from "./components/auth/LogIn";
import SingIn from "./components/auth/SingIn";
import Home from "./components/Home/Home";
import Welcome from "./components/Welcome/Welcome";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

import AuthState from "./context/auth/authState";
import MeetState from "./context/Meet/meetState";
import FormState from "./context/Form/formState";
import WeatherApiState from "./context/WeatherApi/weatherapiState";
import BeerOrderState from "./context/BeerOrder/beerOrderState";

import tokenAuth from "./config/tokenAuth";

const token = localStorage.getItem("token");
if (token) {
  tokenAuth(token);
}

function App() {
  const history = useHistory();
  return (
    <BeerOrderState>
      <WeatherApiState>
        <FormState>
          <MeetState>
            <AuthState>
              <Router>
                <Switch history={history}>
                  <Route exact path="/" component={Welcome} />
                  <Route exact path="/login" component={LogIn} />
                  <Route exact path="/singin" component={SingIn} />
                  <PrivateRoute exact path="/home" component={Home} />
                </Switch>
              </Router>
            </AuthState>
          </MeetState>
        </FormState>
      </WeatherApiState>
    </BeerOrderState>
  );
}

export default App;
