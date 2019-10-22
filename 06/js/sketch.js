var input;
var imageContainer;

function setup() {
	noCanvas();

	input = select("#translation-input");
	imageContainer = select("#image-translation");
	input.elt.focus();
}

function keyPressed() {
	if (keyCode === ENTER) {
		console.log("You pressed enter!");
		console.log("You want to search for: " + input.value());

		var phrase = input.value();
		var url = "http://api.giphy.com/v1/gifs/translate?"
			+ "api_key=upVvwFwQsX58YVdDnu8NOjFRVFEgCOor"
			+ "&s=" + phrase;

		console.log(url);
		loadJSON(url, onGiphyLoaded, onGiphyFailed);
	}
}

function onGiphyLoaded(json) {

	console.log(json);
	var src = json.data.images.fixed_height.url;
	var img = createImg(src);

	img.parent(imageContainer);
	imageContainer.style("border","2px solid black");
	imageContainer.position(15, 30);
}

function onGiphyFailed(response) {
	console.log("Error!");
	console.log(response);
}
