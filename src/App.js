import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import LogIn from "./components/auth/LogIn";
import SingIn from "./components/auth/SingIn";
import Home from "./components/Home/Home";
import Welcome from "./components/Welcome/Welcome";

import AuthState from './context/auth/authState';
import MeetState from './context/Meet/meetState';
import FormState from './context/Form/formState';
import OrderState from './context/Order/orderState';

function App() {
  const history = useHistory();
  return (
    <OrderState>
    <FormState>
    <MeetState>
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
    </MeetState>
    </FormState>
    </OrderState>
  );
}

export default App;
