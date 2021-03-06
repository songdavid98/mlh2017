//
//// test print
//var form = document.getElementById("image-form");
//form.onsubmit = function(e) {
//	e.preventDefault();
//	console.log(form.test.value);
//};

// checks for valid API Key
try {
    var app = new Clarifai.App({
        apiKey: myApiKey
    });
} catch (err) {
    alert("Need a valid API Key!");
    throw "Invalid API Key";
}

// Checks for valid image type by searching URL for valid image types
// search(subvar) returns index of subvar first found in given var, -1 if not found
function validFile(imageName) {
    var lowerImageName = imageName.toLowerCase();
    return lowerImageName.search(/jpg|png|bmp|tiff/gi) != -1;
}
