import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
  <div className="page-header">
      <div className="content-container">
          <h1 className="page-header__title">404  - Not Found</h1>
      </div>
  </div>
  <div className="content-container">
      <div className="">
      <span >You may want to jump back <Link className="button" to="/">Home</Link></span>
      </div>
  </div>
</div> 
);

export default NotFoundPage;
