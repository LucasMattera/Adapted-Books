import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import AddBook from './AddBook';
import Admin from './Admin';
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
                        <Route exact path="/admin" component={Admin}/>
                        <Route exact path="/admin/add" component={AddBook}/>
                        <Route exact path="/admin/login" component={LoginAdmin} />
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