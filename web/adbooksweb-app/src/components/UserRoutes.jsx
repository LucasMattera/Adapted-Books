import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Inicio from './Inicio';
import Libro from './Libro';
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
                                <Route exact path="/" component={Inicio} /> 
                                <Route path="/libros" component={Libro}/>
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