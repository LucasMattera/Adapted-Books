import React, { useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';



function AdminHomeButton(){

    const history = useHistory();
  
    const goAdminHome = () => {
        history.push("/admin") ;
    }

   return (
        <div>
            <a class="nav-link active" aria-current="page" href="/admin">Home</a>
        </div>
    );

};

export default AdminHomeButton;