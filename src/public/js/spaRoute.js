route.setSelector(".content");

route.addRoute("", () => {
	console.log("The route works!");
});

setTimeout(1000, () => {
	console.log(route.selector)
});