import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import NavBar from './NavBar'
import 'antd/dist/antd.css';
import CList from './CList/CList'
import ReviewFront from './ReviewFront/ReviewFront'
import CReview from './CReview/CReview'
import FrontPage from './FrontPage/FrontPage.js'
import LoginPage from './LoginPage/LoginPage.js'
import Timetable from './Timetable/Timetable'
import SignUp from './SignUp/SignUp'
import AddReview from './AddReview/AddReview'

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
        <Route path="/AddReview" exact component={Addreview}/>
        <Route path="/SignUpPage" exact component={SignUp}/>

        
        
        


      </BrowserRouter>
    </React.Fragment>  
  );
  }

export default App;
