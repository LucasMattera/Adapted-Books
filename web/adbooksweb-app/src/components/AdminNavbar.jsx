import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import AdminHomeButton from './AdminHomeButton';
import AdminLogOutButtom from './AdminLogOutButton';
import {useHistory} from "react-router-dom";


function AdminNavbar(){
    return(
        <>
            <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand">Adapted Books Admin</a>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav me-auto mb-2 mb-md-0">
                    <li class="nav-item">
                    <AdminHomeButton/>
                    </li>
                    <li class="nav-item">
                    <AdminLogOutButtom/>
                    </li>
                </ul>
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
            </nav>
        </>
    )
}

export default AdminNavbar