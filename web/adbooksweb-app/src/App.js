import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Inicio from './components/Inicio';
import Libro from './components/Libro';

 class App extends React.Component {


 render(){
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Inicio} /> 
        <Route path="/libros/" component={Libro}/>
        <Route path="*" render= {() =>
            <h1>Not Found</h1>
        }/>
      </Switch>
    </BrowserRouter>
    )
  }
}
export default App;