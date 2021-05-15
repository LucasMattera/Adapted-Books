import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import AddBook from './AddBook';
import Admin from './Admin';
import AdminNavbar from './AdminNavbar';
import LoginAdmin from './Login/LoginAdmin';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';



class AdminRoutes extends React.Component {
    render(){

    return (
        <div className="page-container">
            <div className="content-wrap">     
                <BrowserRouter>
                    <AdminNavbar/>
                    <Switch>
                        <PrivateRoute exact path="/admin" component={Admin}/>
                        <PrivateRoute exact path="/admin/add" component={AddBook}/>
                        <PublicRoute exact path="/admin/login" component={LoginAdmin}/>
                        <Route path="*" render= {() =>
                                <h1>Not Found</h1>
                            }/>
                    </Switch>
                    </BrowserRouter>
            </div>
        </div>
    )
    }
    
}
export default AdminRoutes;