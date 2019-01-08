import React from 'react';

const DashboardPage = () => (
  <div className="page-header">
    <div className="content-container">
      <h1 className="page-header__title">Viewing</h1>
      <div className="page-header__actions">
        <Link className="button" to="/create">Add Axpense</Link>
      </div>
    </div>
  </div>
);

export default DashboardPage;
