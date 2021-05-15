import React, { useState } from 'react';
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
                </div>
            </div>
            </nav>
        </>
    )
}

export default AdminNavbar