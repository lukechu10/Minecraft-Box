let route = { 
selector: null 
};

const fs = require('fs');
const $ = require('jquery');

// check for jquery
if(window.jQuery) {
	throw("Error: jQuery is required");
}
else {
	document.addEventListener("DOMContentLoaded", (event) => {
		console.log("jQuery version: " + $().jquery || jQuery().jquery);
	});
	
}

route.addRoute = (url, callback) => {
	
	callback();
};

route.setSelector = (selector) => {
	console.log($(selector));
	this.selector = $(selector);
}