import React from "react";
import {Redirect, Route} from "react-router-dom";
import AdminNavbar from "./AdminNavbar";

function AdminPrivateRoute ({path, component}){

    const isAuthenticated = !!localStorage.getItem("token");

    if (!isAuthenticated) return <Redirect to={"/admin/login"}/>;

    return (
        <>
            {isAuthenticated && <AdminNavbar/>}
            <Route path={path} component={component} />
        </>);
};

export default AdminPrivateRoute