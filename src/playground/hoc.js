// Higher Order Component (HOC) - A component (HOC) that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from "react";
import { createRoot } from "react-dom/client";

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Please login to view the info</p>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

const root = createRoot(document.getElementById("app"));
// root.render(<AdminInfo isAdmin={true} info='There are the details' />);
root.render(<AuthInfo isAuthenticated={true} info='There are the details' />);
