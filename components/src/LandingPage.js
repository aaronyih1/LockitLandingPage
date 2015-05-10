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
						<td><h2>1</h2>Use Mobile App to easily push thoughts (including images, text, audio) to the cloud. Just swipe up </td>
						<td><h2>2</h2>Use the desktop to view, search, and group thoughts</td>
					</tr>
				</table>
			</section>
		);
	}
});

var Features = React.createClass({
	render: function(){
		return(
			<section>
				<table>
					<tr>
						<td><img src="" /><h3>safe and sound</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum dolor debitis autem mollitia beatae deleniti earum eius nobis! Sunt, tenetur. Expedita, omnis minima dolorum dolor tenetur cupiditate architecto similique culpa!</p></td>
						<td><img src="" /><h3>something 4</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum dolor debitis autem mollitia beatae deleniti earum eius nobis! Sunt, tenetur. Expedita, omnis minima dolorum dolor tenetur cupiditate architecto similique culpa!</p></td>
					</tr>
					<tr>
						<td><img src="" /><h3>effective search bar</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum dolor debitis autem mollitia beatae deleniti earum eius nobis! Sunt, tenetur. Expedita, omnis minima dolorum dolor tenetur cupiditate architecto similique culpa!</p></td> 
						<td><img src="" /><h3>effective search bar</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum dolor debitis autem mollitia beatae deleniti earum eius nobis! Sunt, tenetur. Expedita, omnis minima dolorum dolor tenetur cupiditate architecto similique culpa!</p></td>
					</tr>
				</table>
			</section>
		);
	}
});
var Footer = React.createClass({
	render: function(){
		return(
			<footer>
				<ul>
					<li><a href="">what it is</a></li>
					<li><a href="">how to use it</a></li>
					<li><a href="">features</a></li>
					<li><a href="">drop us a line</a></li>
				</ul>
				<form method="post">
					<input type="text" name = "email" /> 
					<input type="submit" value="request" />
				</form>
			</footer>
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
				<HowToUseIt />
				<Features />
				<Footer />
			</div>
			);
	}
});

React.render(<LandingPage />, document.getElementById('landingPage'));