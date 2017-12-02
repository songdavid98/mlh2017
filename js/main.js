var form = document.getElementById("image-form");
form.onsubmit = function(e) {
	e.preventDefault();
	console.log(form.test.value);
};


// predict the contents of an image by passing in a url
	app.models.predict(Clarifai.GENERAL_MODEL, 'https://samples.clarifai.com/metro-north.jpg').then(
        function(response) {
          console.log(response);
        },
        function(err) {
          console.error(err);
        }
      );
