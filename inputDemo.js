console.log("JS File Loaded");

function outputDemo()
{
  var output= document.getElementById("myText").value;

  console.log(output);
  alert(output);

  document.getElementById("output").unnerHTML = "You entered: " + output;
}
