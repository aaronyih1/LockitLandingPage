var LogoStyle ={
	width: 100,
	marginTop: 10,
	marginLeft: 30,
}
var UnorderedListStyle = {
		display:"inline-block",
		whiteSpace: "nowrap",
		float: "right",
		marginTop: 20
}
var ListStyle = {
	display: "inline",
	listStyleType:"none",
	marginRight: 20
}
var LinkStyle={
	textDecoration:"none"
}
var BackgroundStyle={
	backgroundImage: "url(https://download.unsplash.com/photo-1414073875831-b47709631146)",
	backgroundRepeat: "norepeat",
	backgroundPosition: "-40em -68em",
	width:"100vw",
	height: 300,
	WebkitFilter: "contrast(1.1) saturate(1.8) blur(4px)",
    MozFilter:  "contrast(1.1) saturate(1.8) blur(4px)",
    OFilter: "contrast(1.1) saturate(1.8) blur(4px)",
    msFilter: "contrast(1.1) saturate(1.8) blur(4px)",
    filter: "contrast(1.1) saturate(1.8) blur(4px)",
    opacity: "1",
    margin:0
}
var MatteStyle= {
	background: "rgba(103,86,70,0.37)",
	position:"absolute",
	top:110,
	right:100,
	height: 200,
	width:300,
	borderRadius: 5
}
var TitleStyle={
	display:"inline-block",
	fontFamily:"myriad pro",
	textAlign:"right",
	marginLeft:15,
	position:"absolute",
	top:110,
	right:100
}
var SignUpStyle={
	marginLeft:80,
	position:"absolute",
	top:250,
	right:100
}
var InputStyle={
	background:"transparent",
	border: "1.5px solid black",
	borderRadius: 4
}
var HowToUseItStyle={
	background: "lightgrey"
}
var Header = React.createClass({
	render: function(){
		return(
			<header role="banner">
				<object data="imgs/lockitlogo.svg" type="image/svg+xml" id="logo" style={LogoStyle}></object>
				<ul style ={UnorderedListStyle}>
					<li style={ListStyle}><a href="" style={LinkStyle}>what it is</a></li>
					<li style={ListStyle}><a href="" style={LinkStyle}>how to use it</a></li>
					<li style={ListStyle}><a href="" style={LinkStyle}>features</a></li>
					<li style={ListStyle}><a href="" style={LinkStyle}>drop us a line</a></li>
				</ul>
			</header>
		);
	}
});
var BackgroundImage = React.createClass({
	render: function(){
		return(
			<div style={BackgroundStyle}></div>
		);
	}
});
var TitleContent = React.createClass({
	render: function(){
		return(
			<div>
				<h1 style={TitleStyle}>Save and Organize <br/> your thoughts on <br/>the cloud </h1>
				<form method="post" style={SignUpStyle}>
					<input style={InputStyle} type="text" name = "email" /> 
					<input style={InputStyle} type="submit" value="request" />
				</form>
			</div>
		);
	}
});
var WhatItIs = React.createClass({
	render: function(){
		return(
			<section >
				<div><img src="https://download.unsplash.com/photo-1430132594682-16e1185b17c5"/></div>
				<p>Lockit is a mobile and web app couple that together helps you manage your thoughts and ideas</p>
			</section>
		);
	}
});

var HowToUseIt = React.createClass({
	render: function(){
		return(
			<section style={HowToUseItStyle}>
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