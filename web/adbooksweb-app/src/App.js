import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Inicio from './components/Inicio';
import Libro from './components/Libro';
import Footer from './components/Footer';
import './styles/AppK.css';

class App extends React.Component {


    render(){
        return (
            <div className="page-container">

                <div className="content-wrap">
                    <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Inicio} /> 
                        <Route path="/libros/" component={Libro}/>
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