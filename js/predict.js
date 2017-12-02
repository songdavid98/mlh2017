function doPredict(value) {
    app.models.predict(Clarifai.GENERAL_MODEL, value, {
        maxConcepts: 45
    }).then(
        function (response) {
            console.log(response);
			
			// negative keywords
			var nKeywords = ["weapon", "monster", "scary", "fear", "horror",
							"nightmare", "knife", "blood", "bloody", "creepy",
							"dangerous", "danger", "hideous", "wild", "fight",
							"fighting", "dragon", "aggressive disposition",
							"attack", "aggressive", "claw", "sharp", "dark",
							"night", "dirty", "dirt", "mud", "dust", "messy",
							"mask", "war", "military", "offense", "strange",
							"security", "army", "navy"];
			// positive keywords
			var pKeywords = ["cute", "pretty", "handsome", "attractive",
							"nature", "animal", "art", "nypmh", "happy",
							"happiness", "healthy", "health", "magic", "sun",
							"smile", "laugh", "cheerful", "freedom", "child",
							"children", "organized"];
			
			var output = "<b>Output:</b><br>";
			
			var outputArray = response.rawData.outputs[0];
            var regionArray = outputArray.data.concepts;
			
			var nCount = 0;
			var pCount = 0;
            for (var i = 0; i < regionArray.length; i++) {
				var outputTagVal = "Tag: "
				+ regionArray[i].name
				+ "<br>Value: "
				+ regionArray[i].value;
				
				// add to output string
				output += outputTagVal + "<br><br>";
				
				for (var j = 0; j < nKeywords.length; j++) {
					// str1.localeCompare(str2) returns 0 if same string
					
					if (regionArray[i].name.localeCompare(nKeywords[j]) == 0) {
						nCount += regionArray[i].value;
						output += "<b>Danger Percentage = " + nCount + "</b><br><br>";
						break;
					}
					
					if (regionArray[i].name.localeCompare(pKeywords[j]) == 0) {
						pCount += regionArray[i].value;
						output += "<b>Safe Percentage = " + pCount + "</b><br><br>";
						break;
					}
				}
			}
			
			var nPercentage = Math.round(nCount * 10);
			var pPercentage = Math.round(pCount * 10);
			output = "<b>THE DANGER PERCENTAGE IS... "
			+ Math.round(nPercentage) + "%</b><br>"
			+ "<b>THE SAFE PERCENTAGE IS... "
			+ Math.round(pPercentage) + "%</b><br>"
			+ "<br><br>" + output;
			
			var imgURL = '<img id="inputted_img" src="'
			+ outputArray.input.data.image.url
			+ '" width="400px"/><br><br>';
			output = imgURL + output;
			
            maindiv = document.getElementById("result");
            maindiv.innerHTML = output;
        },
        function (err) {
            alert('Unable to predict');
        }
    );

}
