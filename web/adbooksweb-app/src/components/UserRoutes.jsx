import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Home';
import Book from './Book';
import Navbar from './Navbar';
import SearchResult from './Search/SearchResult';


class UserRoutes extends React.Component {
    render(){
        return (
                <div className="page-container">
                    <div className="content-wrap">
                        <BrowserRouter>
                            <Navbar/>   
                            <Switch>
                                <Route exact path="/" component={Home} /> 
                                <Route path="/libros/" component={Book}/>
                                <Route path="/search" component={SearchResult}/>
                                <Route path="*" render= {() =>
                                    <h1>Not Found</h1>
                                }
                            />
                        </Switch>
                    </BrowserRouter>
                </div>
            </div>
        )
    }
}
export default UserRoutes;