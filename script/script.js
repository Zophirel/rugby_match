var request = new XMLHttpRequest();
request.open("GET", "../assets/matches.json", false);
request.send(null)
var allRugbyMatches = JSON.parse(request.responseText);

