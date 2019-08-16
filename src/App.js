import React, {Component} from 'react';
import './App.css';

import {BrowserRouter, Route} from 'react-router-dom';
import HeadBar from './Components/HeadBar';
import SideBar from './Components/SideBar';
import Content from './Components/Content';
import FoodDetails from './Components/FoodDetails';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        showSideBar: true
    };
  }   
  
  sideBarClick = () => {
    this.setState({showSideBar: !this.state.showSideBar});
  };


  render() {
    return (
      <div className="container-fluid d-flex h-100 flex-column px-0">
        <HeadBar sideBarBtnEvent={this.sideBarClick} />
        <div className="row h-100 flex-1 d-flex justify-content-start">
          <SideBar shouldDisplay={this.state.showSideBar} />
          
          <BrowserRouter>
            <Route exact path="/" component={Content} />
            <Route exact path="/food/:id" component={FoodDetails} />
          </BrowserRouter>
          
        </div>
      </div>
    );
  }
}

export default App;
