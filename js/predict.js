function doPredictURL(value) {
    app.models.predict(Clarifai.GENERAL_MODEL, value).then(
        function (response) {
            console.log(response);
			// make sense of response
			var output = "<p>";
			
			var conceptNames = "";
			var tagArray;
			var tagCount = 0;
			
			var outputStatus = "Status code: " + response.rawData.status.code + "\nDescription: " + response.rawData.status.description;
			output += outputStatus + "</p>";
			
			maindiv = document.getElementById("result");
			maindiv.innerHTML = outputStatus;
        },
        function (err) {
            alert('Unable to predict');
        }
    );

}
