/*
action: 'shop:login'
template: inner
protocol: all
published: true
name: Login
url: /login
---*/
import React, { Component, PropTypes } from 'react';

export default class Login extends Component {
   render() {
      return (
<div>
<div id="banner" class="jumbotron row">

	<h1>Sign In / Register</h1>

</div>
<section class="page-section row col-split-2">
	<div class="col-xs-12 col-sm-6 col-md-4 col-md-offset-1">
		/*{ flash() }
		{ open_form({'data-ajax-handler': 'shop:onLogin', 'data-validation-message' : ''}) }*/
			<h2>Sign In</h2>
			<div class="row">
				<div class="col-xs-12 form-group">
					<input type="email" name="email" id="email" class="form-control" placeholder="Email" value="{{ post('email') }}"/>
					<label for="email">Email</label>
				</div>
				<div class="col-xs-12 form-group">
					<input type="password" name="password" id="password" class="form-control" placeholder="Password"/>
					<label for="password">Password</label>
				</div>
				<div class="col-xs-12 form-group clearfix">
					<a class="btn btn-default forget-link pull-left" href="{{ site_url('/password-restore') }}">forgot your password?</a>
					<button class="btn btn-primary pull-right" type="submit">Log In <i class="fa fa-lock"></i></button>
					<input type="hidden" name="redirect" value="{{ site_url(root_url('/')) }}"/>
				</div>
			</div>
		//{ close_form() }
	</div>
	<div class="col-xs-12 col-sm-6 col-md-4 col-md-offset-2">
		//{ open_form({'data-ajax-handler': 'shop:onSignup', 'data-validation-message' : ''}) }
			<h2>Register a New Account</h2>
			<div class="row">
				<div class="col-xs-12 form-group">
					<input name="signup[first_name]" id="signup[first_name]" type="text" class="form-control" placeholder="First Name *" />
					<label for="signup[first_name]">First Name</label>
				</div>
				<div class="col-xs-12 form-group">
					<input name="signup[last_name]" id="signup[last_name]" type="text" class="form-control"  placeholder="Last Name *"/>
					<label for="signup[last_name]">Last Name</label>
				</div>
				<div class="col-xs-12 form-group">
					<input id="signup[email]" type="text" name="signup[email]" class="form-control"  placeholder="Email *"/>
					<label for="signup[email]">Email</label>
				</div>
				<div class="col-xs-12 form-group">
					<input name="signup[password]" id="signup[password]" type="password" class="form-control"  placeholder="Password *"/>
					<label for="signup[password]">Password</label>
				</div>
				<div class="col-xs-12 form-group">
					<input name="signup[password_confirmation]" id="signup[password_confirmation]" type="password" class="form-control"  placeholder="Confirm Password *"/>
					<label for="signup[password_confirmation]">Confirm Password</label>
				</div>
				<input type="hidden" name="autologin" value="1" />
				<input type="hidden" name="redirect" value="{{ site_url('registered') }}"/>
			  </div>
			  <input type="checkbox" name="accepts_marketing" id="accepts_marketing" checked/> Recieve promotional emails<br></br> <br></br>
			  <button class="btn btn-primary">Submit <i class="fa fa-arrow-right"></i></button>
		    //{ close_form() }
	      </div>
</section>
</div>
      );
   }
}
