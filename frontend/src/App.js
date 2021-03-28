import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import NavBar from './NavBar'
import 'antd/dist/antd.css';
import CList from './CList/CList.js'
import ReviewFront from './ReviewFront/ReviewFront.js'
import CReview from './CReview/CReview.js'
import FrontPage from './FrontPage/FrontPage.js'
import LoginPage from './LoginPage/LoginPage.js'
import Timetable from './Timetable/Timetable.js'
import SignUp from './SignUp/SignUp.js'
import AddReview from './AddReview/AddReview.js'
import Subclasses from './Subclasses/Subclasses.js'

import { Layout, Menu, Breadcrumb } from 'antd';



function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavBar />
        <Route path="/CList" exact component={CList}/>
        <Route path="/ReviewFront" exact component={ReviewFront}/>
        <Route path="/CReview" exact component={CReview}/>
        <Route path="/" exact component={FrontPage}/>
        <Route path="/LoginPage" exact component={LoginPage}/>
        <Route path="/Timetable" exact component={Timetable}/>
        <Route path="/AddReview" exact component={AddReview}/>
        <Route path="/SignUp" exact component={SignUp}/>
        <Route path="/Subclasses" exact component={Subclasses}/>
        
        
        


      </BrowserRouter>
    </React.Fragment>  
  );
  }

export default App;
