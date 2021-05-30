import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Footer from './components/Footer';
import './styles/App.css';
import UserRoutes from './components/UserRoutes';
import AdminRoutes from './components/Admin/AdminRoutes';
import Navbar from './components/Navbar';

class App extends React.Component {
    render(){
        return (
            <div className="page-container backgroundPage">
                <div className="content-wrap">
                    <BrowserRouter>
                        <Switch>
                            <Route path="/admin" component={AdminRoutes}/> 
                            <Route path="/" component={UserRoutes}/> 
                        </Switch>
                    </BrowserRouter>
                </div>
                <Footer/> 
            </div>
        )
    }
}
export default App;