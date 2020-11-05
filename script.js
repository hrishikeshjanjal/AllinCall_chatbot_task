
//function to show the questions section and is triggered after clicking on chatbot option at bottom right corner
function show() {
  var x = document.getElementById("click1");

  if (x.style.visibility === "hidden") 
    x.style.visibility = "visible";
  else 
    x.style.visibility = "hidden";
  

  var y = document.getElementById("chatDisplay");
  if(y.style.visibility==="visible")
  	y.style.visibility = "hidden";
  else 
    y.style.visibility = "visible";
}

//function to hide the questions section and is triggered after clicking on chatbot option at bottom right corner
function hide() {
  var x = document.getElementById("click1");
  if (x.style.visibility === "visible") {
    x.style.visibility = "hidden";

  }
  else {
    x.style.visibility = "hidden";
  }
  var y = document.getElementById("chatDisplay");
  if(y.style.visibility==="hidden")
  	y.style.visibility = "visible";
  else 
    y.style.visibility = "hidden";
}

//Hrishikesh Janjal