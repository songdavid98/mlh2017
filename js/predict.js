function doPredictURL(value) {
    app.models.predict(Clarifai.GENERAL_MODEL, value).then(
        function (response) {
            console.log(response);
        },
        function (err) {
            console.error(err);
        }
    );

}
