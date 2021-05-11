import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Inicio from './components/Inicio';
import Libro from './components/Libro';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './styles/App.css';
import SearchResult from './components/Search/SearchResult';
import AddBook from './components/AddBook';

import LoginAdmin from './components/Login/LoginAdmin';
import AdminLogOutButtom from './components/AdminLogOutButton';
import AdminHomeButton from './components/AdminHomeButton';
import AdminNavbar from './components/AdminNavbar';
import UserRoutes from './components/UserRoutes';
import AdminRoutes from './components/AdminRoutes';


class App extends React.Component {


    render(){
        return (
            <div className="page-container">
                <div className="content-wrap">
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/" component={UserRoutes} /> 
                            <Route path="/admin" component={AdminRoutes} /> 
                            <Route path="*" render= {() =>
                                <h1>Not Found</h1>
                            }/>
                        </Switch>
                        </BrowserRouter>
                </div>

                <Footer/> 
            </div>
        )
    }
}
export default App;