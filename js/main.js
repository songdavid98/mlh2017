var form = document.getElementById("image-form");
form.onsubmit = function(e) {
	e.preventDefault();
	console.log(form.test.value);
};

// Install the client from NPM
npm install clarifai

// Require the client
const Clarifai = require('clarifai');

// instantiate a new Clarifai app passing in your api key.
const app = new Clarifai.App({
 apiKey: 'a84ff7aedb104f63adfb6f5469713831'
});

// predict the contents of an image by passing in a url
	app.models.predict(Clarifai.GENERAL_MODEL, 'https://samples.clarifai.com/metro-north.jpg').then(
        function(response) {
          console.log(response);
        },
        function(err) {
          console.error(err);
        }
      );
