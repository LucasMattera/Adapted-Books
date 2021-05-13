import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Footer from './components/Footer';
import './styles/App.css';
import UserRoutes from './components/UserRoutes';
import AdminRoutes from './components/Admin/AdminRoutes';

class App extends React.Component {

    render(){
        return (
            <div className="page-container">
                <div className="content-wrap">
                    <BrowserRouter>
                        <Switch>
                            <Route 
                                exact path="/" 
                                component={UserRoutes} 
                            /> 
                            <Route 
                                path="/admin" 
                                component={AdminRoutes}
                            /> 
                        </Switch>
                    </BrowserRouter>
                </div>
                <Footer/> 
            </div>
        )
    }
}
export default App;