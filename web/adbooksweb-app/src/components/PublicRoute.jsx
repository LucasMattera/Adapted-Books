import React from "react";
import {Redirect, Route} from "react-router-dom";

function PublicRoute ({path, component}){

    const isAuthenticated = !!localStorage.getItem("token");

    if (isAuthenticated) return <Redirect to={"/admin"}/>;

    return <Route path={path} component={component} />;
};

export default PublicRoute