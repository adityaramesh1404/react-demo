import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import WhatWeDo from './components/pages/WhatWeDo';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Director from './components/pages/Director';
import Office from './components/pages/Office';
import Search from './components/pages/Search';
import { FooterContainer } from './containers/footer';



function App() {
  return ( 
    <div className = "page-container">
    <div className="content-wrap">

    <Router>
      <Navbar />
      <Switch>
        <Route path='/'exact component={Home} />
        <Route path='/about-us'exact component={AboutUs} />
        <Route path='/what-we-do'exact component={WhatWeDo} />
        <Route path='/contact-us'exact component={ContactUs} />
        <Route path='/sign-up'exact component={SignUp } />
        <Route path='/director'exact component={Director } />
        <Route path='/office'exact component={Office } />
        <Route path='/search'exact component={Search } />
        
      </Switch>
    </Router>
    </div>
    <FooterContainer/>
    </div>
  );
}

export default App;
