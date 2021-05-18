import React from 'react';
import { useHistory } from 'react-router-dom';

function AdminLogOutButtom(){

    const history = useHistory();
  
    const logout = (event) =>{
        event.preventDefault()
        localStorage.removeItem("token");
        history.push("/admin/login")
    }

   return (
        <div >
            <button 
                class="btn btn-outline-success" 
                type="submit" 
                onClick={logout}
            >
                Log out
            </button>
        </div>
    );

};

export default AdminLogOutButtom;