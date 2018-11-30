import React, { Component } from 'react';
//import { Router, Route,browserHistory,Link } from 'react-router';
//import Login from './pages/login/page-login.js';
//var flash = require('connect-flash');
import './resources/css/main.css';

class App extends Component{
   render(){
      return(
      /*  export default class Login extends Component {
           render() {
              return (*/
        <div>
        <div id="banner" className="jumbotron row">

        	<h1>Sign In / Register</h1>

        </div>
        <section className="page-section row col-split-2">
        	<div className="col-xs-12 col-sm-6 col-md-4 col-md-offset-1">

        			<h2>Sign In</h2>
        			<div className="row">
        				<div className="col-xs-12 form-group">
        					<input type="email" name="email" id="email" className="form-control" placeholder="Email" value=""/>
        					<label htmlFor="email">Email</label>
        				</div>
        				<div className="col-xs-12 form-group">
        					<input type="password" name="password" id="password" className="form-control" placeholder="Password"/>
        					<label htmlFor="password">Password</label>
        				</div>
        				<div className="col-xs-12 form-group clearfix">
        					<a className="btn btn-default forget-link pull-left" href="{{ site_url('/password-restore') }}">forgot your password?</a>
        					<button className="btn btn-primary pull-right" type="submit">Log In <i className="fa fa-lock"></i></button>
        					<input type="hidden" name="redirect" value=""/>
        				</div>
        			</div>
        	</div>
        	<div className="col-xs-12 col-sm-6 col-md-4 col-md-offset-2">
        		        			<h2>Register a New Account</h2>
        			<div className="row">
        				<div className="col-xs-12 form-group">
        					<input name="signup[first_name]" id="signup[first_name]" type="text" className="form-control" placeholder="First Name *" />
        					<label htmlFor="signup[first_name]">First Name</label>
        				</div>
        				<div className="col-xs-12 form-group">
        					<input name="signup[last_name]" id="signup[last_name]" type="text" className="form-control"  placeholder="Last Name *"/>
        					<label htmlFor="signup[last_name]">Last Name</label>
        				</div>
        				<div className="col-xs-12 form-group">
        					<input id="signup[email]" type="text" name="signup[email]" className="form-control"  placeholder="Email *"/>
        					<label htmlFor="signup[email]">Email</label>
        				</div>
        				<div className="col-xs-12 form-group">
        					<input name="signup[password]" id="signup[password]" type="password" className="form-control"  placeholder="Password *"/>
        					<label htmlFor="signup[password]">Password</label>
        				</div>
        				<div className="col-xs-12 form-group">
        					<input name="signup[password_confirmation]" id="signup[password_confirmation]" type="password" className="form-control"  placeholder="Confirm Password *"/>
        					<label htmlFor="signup[password_confirmation]">Confirm Password</label>
        				</div>
        				<input type="hidden" name="autologin" value="1" />
        				<input type="hidden" name="redirect" value=""/>
        			  </div>
        			  <input type="checkbox" name="accepts_marketing" id="accepts_marketing" checked readOnly/> Recieve promotional emails<br></br> <br></br>
        			  <button className="btn btn-primary">Submit <i className="fa fa-arrow-right"></i></button>

        	      </div>
        </section>
        </div>
              );
           }
        }/*<Router history={browserHistory}>
         <div>
            <Link to="/login">Login</Link>
            <Route path="/login"  component={Login} />
         </div>
        </Router>*/

export default App;
