var Header = React.createClass({
	render: function(){
		return(
			<div>
			<header role="banner">
				<object data="imgs/lockitlogo.svg" type="image/svg+xml" id="logo"></object>
				<ul>
					<li><a href="">what it is</a></li>
					<li><a href="">how to use it</a></li>
					<li><a href="">features</a></li>
					<li><a href="">drop us a line</a></li>
				</ul>
			</header>
			</div>
		);
	}
});

module.exports = Header;