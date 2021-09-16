import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import { createBrowserHistory } from "history"
import DashboardPage from './pages/DashboardPage';
import NotFoundPage from './pages/NotFoundPage';
import AddSwitchPage from './pages/AddSwitchPage';
import EditSwitchPage from './pages/EditSwitchPage';



export const appHistory = createBrowserHistory();

const App = () => (
  <Router history={appHistory}>
      <Switch>        
        <Route path="/" component={DashboardPage} exact={true} />         
        <Route path="/add" component={AddSwitchPage}  />         
        <Route path="/edit/:id" component={EditSwitchPage}  />         
        <Route path="/404" component={NotFoundPage} />
        <Route  component={NotFoundPage} />
      </Switch>
  </Router>
);

export default App;
