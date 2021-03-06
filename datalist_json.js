// Wait for the dom to be loaded
document.addEventListener('DOMContentLoaded', function(event) {

    // Setup an XMLHttpRequest / AJAX request
    var request = new XMLHttpRequest();

    if (!request) {
        alert('Giving up :( Cannot create an XMLHTTP instance');
        return false;
    }

    //request.onreadystatechange = alertContents;
    request.open('GET', 'colors.json');

    // Setup an "event listener".
    request.onload = function() {
        if (request.status >= 200 && request.status < 400){
            var response = JSON.parse(request.responseText.toString());
            console.log(response)
            response.rgb.forEach(function(el){
                console.log(el)
                addListEntry(el.color, "Subs: " + el.code);
            });
        }
    };

    // Send our request
    request.send();
});

function alertContents() {
    try {
        if (request.readyState === XMLHttpRequest.DONE) {
          if (request.status === 200) {
            alert(request.responseText);
          } else {
            alert('There was a problem with the request.');
          }
        }
      }
      catch( e ) {
        alert('Caught Exception: ' + e.description);
      }
}

// Break the list adding code into a function for easier re-use
function addListEntry(value, text) {

    // Create a new option element.
    var optionNode =  document.createElement("color");

    // Set the value
    optionNode.value = value;

    // create a text node and append it to the option element
    optionNode.appendChild(document.createTextNode(text));

    // Add the optionNode to the datalist
    document.getElementById("panel-colors").appendChild(optionNode);

}
