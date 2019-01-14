import React from 'react';
import {Link} from 'react-router-dom';
import SwitchList from './SwitchList';

const DashboardPage = () => (
  <div>
  <div className="page-header">
    <div className="content-container">
      <h1 className="page-header__title">Appliance List</h1>
      <div className="page-header__actions">
        <Link className="button" to="/add">Add Switch</Link>
      </div>
    </div>
  </div>
  <SwitchList />
  </div>
);

export default DashboardPage;
