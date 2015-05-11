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
	backgroundPosition: "-40em -70em",
	width:"100vw",
	height: 300,
	WebkitFilter: "contrast(1.1) saturate(1.8) blur(7px)",
    MozFilter:  "contrast(1.1) saturate(1.8) blur(7px)",
    OFilter: "contrast(1.1) saturate(1.8) blur(7px)",
    msFilter: "contrast(1.1) saturate(1.8) blur(7px)",
    filter: "contrast(1.1) saturate(1.8) blur(7px)",
    opacity: "0.8",
    margin:0
}
var MatteStyle= {
	background: "rgba(103,86,70,0.37)",
	width: 100,
	height: 300
}
var TitleStyle={
	display:"inline-block",
	fontFamily:"myriad pro"
}
var SignUpStyle={
	display:"inline-block"
}
var Header = React.createClass({displayName: "Header",
	render: function(){
		return(
			React.createElement("header", {role: "banner"}, 
				React.createElement("object", {data: "imgs/lockitlogo.svg", type: "image/svg+xml", id: "logo", style: LogoStyle}), 
				React.createElement("ul", {style: UnorderedListStyle}, 
					React.createElement("li", {style: ListStyle}, React.createElement("a", {href: "", style: LinkStyle}, "what it is")), 
					React.createElement("li", {style: ListStyle}, React.createElement("a", {href: "", style: LinkStyle}, "how to use it")), 
					React.createElement("li", {style: ListStyle}, React.createElement("a", {href: "", style: LinkStyle}, "features")), 
					React.createElement("li", {style: ListStyle}, React.createElement("a", {href: "", style: LinkStyle}, "drop us a line"))
				)
			)
		);
	}
});
var BackgroundImage = React.createClass({displayName: "BackgroundImage",
	render: function(){
		return(
			React.createElement("div", {style: BackgroundStyle})
		);
	}
});
var TitleContent = React.createClass({displayName: "TitleContent",
	render: function(){
		return(
			React.createElement("div", null, 
				React.createElement("h1", {style: TitleStyle}, "Save and Organize ", React.createElement("br", null), " your thoughts on ", React.createElement("br", null), "the CLOUD "), 
				React.createElement("form", {method: "post", style: SignUpStyle}, 
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