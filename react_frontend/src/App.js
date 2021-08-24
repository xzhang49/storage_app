import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListProductComponent from './components/ListProductComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateProductComponent from './components/CreateProductComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
          <div className="container">
            <Switch>
              <Route path = "/" exact component = {ListProductComponent}></Route>
              <Route path = "/products" component = {ListProductComponent}></Route> 
              <Route path = "/add-product/:id" component = {CreateProductComponent}></Route> 
            </Switch> 
          </div>
        <FooterComponent />
      </Router>
      
    </div>
    
  );
}

export default App;
