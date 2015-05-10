var Header = React.createClass({
	render: function(){
		return(
			<header role="banner">
				<object data="imgs/lockitlogo.svg" type="image/svg+xml" id="logo"></object>
				<ul>
					<li><a href="">what it is</a></li>
					<li><a href="">how to use it</a></li>
					<li><a href="">features</a></li>
					<li><a href="">drop us a line</a></li>
				</ul>
			</header>
		);
	}
});
var BackgroundImage = React.createClass({
	render: function(){
		return(
			<div></div>
		);
	}
});
var TitleContent = React.createClass({
	render: function(){
		return(
			<div>
				<h1>Save and Organize your thoughts and ideas on the CLOUD </h1>
				<form method="post">
					<input type="text" name = "email" /> 
					<input type="submit" value="request" />
				</form>
			</div>
		);
	}
});
var WhatItIs = React.createClass({
	render: function(){
		return(
			<section>
				<div><img src=""/></div>
				<p>Lockit is a mobile and web app couple that together helps you manage your thoughts and ideas</p>
			</section>
		);
	}
});

var HowToUseIt = React.createClass({
	render: function(){
		return(
			<section>
				<table>
					<tr>
						<td><img src=""/></td>
						<td><img src=""/></td>
					</tr>
					<tr>
						<td><h2>1</h2>Use Mobile App to easily push thoughts(including images, text, </td>
						<td></td>
					</tr>
				</table>
			</section>
		);
	}
});

var LandingPage = React.createClass({
	render: function(){
		return(
			<div>
				<Header />
				<BackgroundImage />
				<TitleContent />
				<WhatItIs />
			</div>
			);
	}
});

React.render(<LandingPage />, document.getElementById('landingPage'));