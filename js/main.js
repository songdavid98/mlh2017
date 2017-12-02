var form = document.getElementById("image-form");
form.onsubmit = function(e) {
	e.preventDefault();
	console.log(form.test.value);
};

try {
  var app = new Clarifai.App({
    apiKey: myApiKey
  });
}
catch(err) {
  alert("Need a valid API Key!");
  throw "Invalid API Key";
}

// predict the contents of an image by passing in a url
	app.models.predict(Clarifai.GENERAL_MODEL, 'https://samples.clarifai.com/metro-north.jpg').then(
        function(response) {
          console.log(response);
        },
        function(err) {
          console.error(err);
        }
      );
