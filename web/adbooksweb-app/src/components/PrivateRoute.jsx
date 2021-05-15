import React from "react";
import {Redirect, Route} from "react-router-dom";

function PrivateRoute ({path, component}){

    const isAuthenticated = !!localStorage.getItem("token");

    if (!isAuthenticated) return <Redirect to={"/admin/login"}/>;

    return <Route path={path} component={component} />;
};

export default PrivateRoute