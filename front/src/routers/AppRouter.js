import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import PublicRoute from './PublicRoute';
import AddSwitchPage from '../components/AddSwitchPage';
import EditSwitchPage from '../components/EditSwitchPage';


export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={DashboardPage} exact={true} />         
        <PublicRoute path="/add" component={AddSwitchPage}  />         
        <PublicRoute path="/edit/:id" component={EditSwitchPage}  />         
        <Route path="/404" component={NotFoundPage} />
        <Route  component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
