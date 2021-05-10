import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Inicio from './components/Inicio';
import Libro from './components/Libro';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './styles/App.css';
import SearchResult from './components/Search/SearchResult';
import AddBook from './components/AddBook';

class App extends React.Component {


    render(){
        return (
            <div className="page-container">
                <div className="content-wrap">
                    <BrowserRouter>
                        <Navbar/>   
                        <Switch>
                            <Route exact path="/" component={Inicio} /> 
                            <Route path="/libros/" component={Libro}/>
                            <Route path="/search" component={SearchResult}/>
                            <Route path="/admin/add" component={AddBook}/>
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