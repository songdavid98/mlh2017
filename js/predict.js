function doPredict(value) {
    app.models.predict(Clarifai.GENERAL_MODEL, value, {
        maxConcepts: 45
    }).then(
        function (response) {
            console.log(response);
			
			var keywords = ["weapon", "monster", "scary", "fear", "horror",
							"nightmare", "knife", "blood", "bloody", "creepy",
							"dangerous", "danger"];
            var output = "<b>Output:</b><br>";

            var outputStatus = "Status code: " +
                response.rawData.status.code +
                "<br>Description: " +
                response.rawData.status.description;
            // add to output string
            output += outputStatus + "<br><br>";

            var outputArray = response.rawData.outputs[0];

            var outputModel = "Model name: " +
                outputArray.model.display_name +
                "<br>app_id: " +
                outputArray.model.app_id;
            // add to output string
            output += outputModel + "<br>-------------------------------<br>";

            var regionArray = outputArray.data.concepts;
			var dangerCount = 0;

            for (var i = 0; i < regionArray.length; i++) {
				for (var j = 0; j < keywords.length; j++) {
					// str1.localeCompare(str2) returns 0 if same string
					if (regionArray[i].name.localeCompare(keywords[j]) == 0) {
						dangerCount += regionArray[i].value;
						output += "<b>Danger Percentage: " + dangerCount + "</b><br>";
					}
				}
				
				var outputTagVal = "Tag: "
				+ regionArray[i].name
				+ "<br>Value: "
				+ regionArray[i].value;
				
				// add to output string
				output += outputTagVal + "<br><br>";
			}

            maindiv = document.getElementById("result");
            maindiv.innerHTML = output;
        },
        function (err) {
            alert('Unable to predict');
        }
    );

}
