var nounButton;
var advButton;
var verbButton;

var wordnikApiKey = "7724bc3bed4a27cc2e00a0f9dc4089a55a7ff9cad1fc638aa";

function setup() {
	noCanvas();

	document.body.style.textAlign = "center";
	document.body.style.marginTop = "100px";

	nounButton = createButton("[proper noun]");
	nounButton.mousePressed(getNewNoun);
	nounButton.style("font-size", "40px");

	advButton = createButton("[adverb]");
	advButton.style("font-size", "40px");
	advButton.mousePressed(getNewAdverb);

	verbButton = createButton("[verb]");
	verbButton.style("font-size", "40px");
	verbButton.mousePressed(getNewVerb);
}

function getNewNoun() {
	var url = "https://api.wordnik.com/v4/words.json/randomWord?" +
		"includePartOfSpeech=proper-noun" +
		"&api_key=" + wordnikApiKey;

	nounButton.attribute("disabled", true);

	loadJSON(url, function (jsonData) {
		nounButton.html(jsonData.word);
		nounButton.removeAttribute("disabled");
	});
}

function getNewAdverb() {
	var url = "https://api.wordnik.com/v4/words.json/randomWord?" +
		"&includePartOfSpeech=adverb" +
		"&api_key=" + wordnikApiKey;

	advButton.attribute("disabled", true);

	loadJSON(url, function (jsonData) {
		advButton.removeAttribute("disabled");
		advButton.html(jsonData.word);
	});
}

function getNewVerb() {
	var url = "https://api.wordnik.com/v4/words.json/randomWord?" +
		"&includePartOfSpeech=verb" +
		"&api_key=" + wordnikApiKey;

	verbButton.attribute("disabled", true);

	loadJSON(url, function (jsonData) {
		verbButton.removeAttribute("disabled");
		verbButton.html(jsonData.word);
	});
}
