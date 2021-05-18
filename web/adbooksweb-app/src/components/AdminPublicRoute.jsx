import React from "react";
import {Redirect, Route} from "react-router-dom";
import AdminNavbar from "./AdminNavbar";

function AdminPublicRoute ({path, component}){

    const isAuthenticated = !!localStorage.getItem("token");

    if (isAuthenticated) return <Redirect to={"/admin"}/>;

    return (
        <>
            <AdminNavbar/>
            <Route path={path} component={component} />
        </>);
};

export default AdminPublicRoute