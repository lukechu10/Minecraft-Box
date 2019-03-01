let route = {
selector: null,
paths: []
};

function Path(path, callback, type="url") {
	this.path = path;
	this.callback = callback;
	this.type = type;
}

const fs = require('fs');
const $ = require('jquery');
const path = require('path');

// contains object in array?
var hasPath = (path) => {
	for (var key in route.paths) {
		if (route.paths[key].path == path) return key;
	}
	return undefined;
}

// check for jquery
if(window.jQuery) {
	throw("Error: jQuery is required");
}
else {
	document.addEventListener("DOMContentLoaded", (event) => {
		console.log("jQuery version: " + $().jquery || jQuery().jquery);
	});

}

route.addPath = (url, callback) => {
	route.paths.push(new Path(url, callback, "fs"));
	callback();
};

route.loadPath = (file) => {
	if(route.selector === null) throw("Error: No selector for content");
	// check if path exists
	if(hasPath(file) === undefined) throw("Error: Path dosen't exist");

	let tempPath = route.paths[hasPath(file)];

	// get data from ajax:
	if(tempPath.type == "url") console.log("Type not supported yet");
	if(tempPath.type == "fs") {
		fs.access(path.join(__dirname, tempPath.path), fs.constants.R_OK, (err) => {
	  	if (err) throw err;

			// read file:
			fs.readFile(path.join(__dirname, tempPath.path), "utf-8", (err, data) => {
				if(err) throw err;
				$(route.selector).html(data);
			});
		});
	}
	else throw("Error: Invalid path type")
}

route.setSelector = (selector) => {
	route.selector = selector;
}
