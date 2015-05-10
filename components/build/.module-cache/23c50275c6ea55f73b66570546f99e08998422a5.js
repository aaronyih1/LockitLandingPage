var LogoStyle ={
	width: 100,
	marginTop: 20,
	marginLeft: 30,
}
var UnorderedListStyle = {
	display:"inline-block",
	whiteSpace: "nowrap",
	float: "right",
	marginTop: 40
}
var ListStyle={
	display: "inline",
	listStyleType:"none",
	marginRight: 20
}
var Header = React.createClass({displayName: "Header",
	render: function(){
		return(
			React.createElement("header", {role: "banner"}, 
				React.createElement("object", {data: "imgs/lockitlogo.svg", type: "image/svg+xml", id: "logo", style: LogoStyle}), 
				React.createElement("ul", {style: UnorderedListStyle}, 
					React.createElement("li", {style: ListStyle}, React.createElement("a", {href: ""}, "what it is")), 
					React.createElement("li", {style: ListStyle}, React.createElement("a", {href: ""}, "how to use it")), 
					React.createElement("li", {style: ListStyle}, React.createElement("a", {href: ""}, "features")), 
					React.createElement("li", {style: ListStyle}, React.createElement("a", {href: ""}, "drop us a line"))
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
			React.createElement("div", null, 
				React.createElement("h1", null, "Save and Organize your thoughts and ideas on the CLOUD "), 
				React.createElement("form", {method: "post"}, 
					React.createElement("input", {type: "text", name: "email"}), 
					React.createElement("input", {type: "submit", value: "request"})
				)
			)
		);
	}
});
var WhatItIs = React.createClass({displayName: "WhatItIs",
	render: function(){
		return(
			React.createElement("section", null, 
				React.createElement("div", null, React.createElement("img", {src: ""})), 
				React.createElement("p", null, "Lockit is a mobile and web app couple that together helps you manage your thoughts and ideas")
			)
		);
	}
});

var HowToUseIt = React.createClass({displayName: "HowToUseIt",
	render: function(){
		return(
			React.createElement("section", null, 
				React.createElement("table", null, 
					React.createElement("tr", null, 
						React.createElement("td", null, React.createElement("img", {src: ""})), 
						React.createElement("td", null, React.createElement("img", {src: ""}))
					), 
					React.createElement("tr", null, 
						React.createElement("td", null, React.createElement("h2", null, "1"), "Use Mobile App to easily push thoughts (including images, text, audio) to the cloud. Just swipe up "), 
						React.createElement("td", null, React.createElement("h2", null, "2"), "Use the desktop to view, search, and group thoughts")
					)
				)
			)
		);
	}
});

var Features = React.createClass({displayName: "Features",
	render: function(){
		return(
			React.createElement("section", null, 
				React.createElement("table", null, 
					React.createElement("tr", null, 
						React.createElement("td", null, React.createElement("img", {src: ""}), React.createElement("h3", null, "safe and sound"), React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum dolor debitis autem mollitia beatae deleniti earum eius nobis! Sunt, tenetur. Expedita, omnis minima dolorum dolor tenetur cupiditate architecto similique culpa!")), 
						React.createElement("td", null, React.createElement("img", {src: ""}), React.createElement("h3", null, "something 4"), React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum dolor debitis autem mollitia beatae deleniti earum eius nobis! Sunt, tenetur. Expedita, omnis minima dolorum dolor tenetur cupiditate architecto similique culpa!"))
					), 
					React.createElement("tr", null, 
						React.createElement("td", null, React.createElement("img", {src: ""}), React.createElement("h3", null, "effective search bar"), React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum dolor debitis autem mollitia beatae deleniti earum eius nobis! Sunt, tenetur. Expedita, omnis minima dolorum dolor tenetur cupiditate architecto similique culpa!")), 
						React.createElement("td", null, React.createElement("img", {src: ""}), React.createElement("h3", null, "effective search bar"), React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum dolor debitis autem mollitia beatae deleniti earum eius nobis! Sunt, tenetur. Expedita, omnis minima dolorum dolor tenetur cupiditate architecto similique culpa!"))
					)
				)
			)
		);
	}
});
var Footer = React.createClass({displayName: "Footer",
	render: function(){
		return(
			React.createElement("footer", null, 
				React.createElement("ul", null, 
					React.createElement("li", null, React.createElement("a", {href: ""}, "what it is")), 
					React.createElement("li", null, React.createElement("a", {href: ""}, "how to use it")), 
					React.createElement("li", null, React.createElement("a", {href: ""}, "features")), 
					React.createElement("li", null, React.createElement("a", {href: ""}, "drop us a line"))
				), 
				React.createElement("form", {method: "post"}, 
					React.createElement("input", {type: "text", name: "email"}), 
					React.createElement("input", {type: "submit", value: "request"})
				)
			)
		);
	}
});

var LandingPage = React.createClass({displayName: "LandingPage",
	render: function(){
		return(
			React.createElement("div", null, 
				React.createElement(Header, null), 
				React.createElement(BackgroundImage, null), 
				React.createElement(TitleContent, null), 
				React.createElement(WhatItIs, null), 
				React.createElement(HowToUseIt, null), 
				React.createElement(Features, null), 
				React.createElement(Footer, null)
			)
			);
	}
});

React.render(React.createElement(LandingPage, null), document.getElementById('landingPage'));