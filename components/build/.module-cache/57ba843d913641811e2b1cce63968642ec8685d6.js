var LandingPage=React.createClass({displayName: "LandingPage",
	render: function(){
		return(
			React.createElement("div", null, 
			React.createElement(Header, null)
			)
			);
	}
});

React.render(React.createElement(LandingPage, null), document.getElementById('landingPage'));