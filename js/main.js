try {
    var app = new Clarifai.App({
        apiKey: myApiKey
    });
} catch (err) {
    alert("Need a valid API Key!");
    throw "Invalid API Key";
}
