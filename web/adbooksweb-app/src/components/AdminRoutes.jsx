import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import AddBook from './AddBook';
import AdminNavbar from './AdminNavbar';
import Footer from './Footer';
import LoginAdmin from './Login/LoginAdmin';


class AdminRoutes extends React.Component {
    render(){

    return (
        <div className="page-container">
            <div className="content-wrap">
                <AdminNavbar/>
                <BrowserRouter> 
                    <Switch>
                        <Route path="/admin/add" component={AddBook}/>
                        <Route path="/admin/login" component={LoginAdmin} />
                    </Switch>
                    </BrowserRouter>
            </div>
        </div>
    )
    }
    
}
export default AdminRoutes;