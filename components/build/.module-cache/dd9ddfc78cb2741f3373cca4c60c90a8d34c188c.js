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
React.render(React.createElement(Header, null), document.getElementById('content'));