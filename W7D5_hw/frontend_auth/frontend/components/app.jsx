import React from 'react';
import WelcomeBar from './nav_bar/welcome_bar_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import ChirpIndexContainer from './chirps/chirp_index_container';
import SignupContainer from './session/signupContainer';
import Home from './home/home';
import { Route } from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../utils/routeUtils';


export default () => (
  <div>
    <ProtectedRoute path="/" component={NavBarContainer} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute path="/chirps" component={ChirpIndexContainer} />
    <AuthRoute path="/signup" component={SignupContainer} />
  </div>
);
