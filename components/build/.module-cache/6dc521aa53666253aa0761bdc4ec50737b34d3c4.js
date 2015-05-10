var Header = React.createClass({displayName: "Header",
	render: function(){
		return(
			React.createElement("header", {role: "banner"}, 
				React.createElement("object", {data: "imgs/lockitlogo.svg", type: "image/svg+xml", id: "logo"}), 
				React.createElement("ul", null, 
					React.createElement("li", null, React.createElement("a", {href: ""}, "what it is")), 
					React.createElement("li", null, React.createElement("a", {href: ""}, "how to use it")), 
					React.createElement("li", null, React.createElement("a", {href: ""}, "features")), 
					React.createElement("li", null, React.createElement("a", {href: ""}, "drop us a line"))
				)
			)
		);
	}
});
var BackgroundImage = React.createClass({displayName: "BackgroundImage",
	render: function(){
		return(
			React.createElement("div", null)
		);
	}
});
var TitleContent = React.createClass({displayName: "TitleContent",
	render: function(){
		return(
			React.createElement("form", {method: "post"}, 
				React.createElement("input", {type: "text", name: "email"}), 
				React.createElement("input", {type: "submit", value: "request"})
			)
		);
	}
});

var LandingPage = React.createClass({displayName: "LandingPage",
	render: function(){
		return(
			React.createElement(Header, null)
			);
	}
});

React.render(React.createElement(LandingPage, null), document.getElementById('landingPage'));