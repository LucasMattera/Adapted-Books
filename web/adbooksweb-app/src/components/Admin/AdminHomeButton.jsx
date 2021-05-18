import React from 'react';
import { useHistory } from 'react-router-dom';

function AdminHomeButton(){

    const history = useHistory();
  
    const goAdminHome = (e) => {
        e.preventDefault();
        history.push("/admin") ;
    }

   return (
        <div>
            <a 
                class="nav-link active" 
                aria-current="page" 
                onClick={e=> goAdminHome(e)}
            >
                Home
            </a>
        </div>
    );

};

export default AdminHomeButton;