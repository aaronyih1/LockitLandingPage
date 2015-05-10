var styleBackground = {
	backgroundImage: "url(https://download.unsplash.com/photo-1414073875831-b47709631146)",
	backgroundRepeat: "no-repeat",
	backgroundPosition: "-40em -58em",
	height: "100vh",
	width:"100vw",
	WebkitFilter: "contrast(1.1) saturate(1.8) blur(7px)",
    MozFilter:  "contrast(1.1) saturate(1.8) blur(7px)",
    OFilter: "contrast(1.1) saturate(1.8) blur(7px)",
    msFilter: "contrast(1.1) saturate(1.8) blur(7px)",
    filter: "contrast(1.1) saturate(1.8) blur(7px)",
    opacity: "0.8"
}


var BackgroundImage = React.createClass({
  render: function() {
    return (<div style={styleBackground}></div>);
  }
});

React.render(
  <BackgroundImage />,
  document.getElementById('background')
);