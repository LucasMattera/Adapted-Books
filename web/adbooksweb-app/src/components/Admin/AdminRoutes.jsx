import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import AddBook from './AddBook';
import Admin from './Admin';
import LoginAdmin from './Login/LoginAdmin.jsx';
import AdminPrivateRoute from './AdminPrivateRoute';
import AdminPublicRoute from './AdminPublicRoute';
import EditBook from './EditBook';

class AdminRoutes extends React.Component {
    render(){

    return (
        <div className="page-container">
            <div className="content-wrap">     
                <BrowserRouter>
                    <Switch>
                        <AdminPrivateRoute exact path="/admin" component={Admin}/>
                        <AdminPrivateRoute path="/admin/edit/" component={EditBook}/>
                        <AdminPrivateRoute exact path="/admin/add" component={AddBook}/>
                        <AdminPublicRoute exact path="/admin/login" component={LoginAdmin}/>
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