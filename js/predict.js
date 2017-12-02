function doPredictURL(value) {
    app.models.predict(Clarifai.GENERAL_MODEL, value, {
        maxConcepts: 45
    }).then(
        function (response) {
            console.log(response);
            // make sense of response
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
            output += outputModel + "<br><br>";

            var imgURL = "Image URL: " +
                outputArray.input.data.image.url;
            // add to output string
            output += imgURL + "<br><br>";

            var regionArray = outputArray.data.concepts;

            for (var i = 0; i < regionArray.length; i++) {
                console.log(regionArray[i].name);
                console.log(regionArray[i].value);

                var outputTagVal = "Tag: " + regionArray[i].name + "<br>Value: " + regionArray[i].value;
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
