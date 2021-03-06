import React from 'react';

const NotFoundComponent = ({ location }) => {
  return (
    <div className="jumbotron">
      <h1 className="display-1">Page Not Found</h1>
      <p className="lead">404 Error</p>
      <p>
        No match for the link <code>{location.pathname}</code>
      </p>
    </div>
  );
}

export default NotFoundComponent;
