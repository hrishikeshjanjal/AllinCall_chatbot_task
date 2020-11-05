// function openChat() {
//   // document.getElementById("click").style.display = "block";
//   console.log("Chat opened");
//  document.getElementByClass("container").style.visibility = "visible";
   
// }

// function closeChat() {
// 	 console.log("Chat closed");
//   // document.getElementById("click").style.display = "none";
//   document.getElementByClass("container").style.visibility = "hidden";
  
// }

// function showHide() {
//   var x = document.getElementById("click1");
//   if (x.style.visibility === "hidden") {
//     x.style.visibility = "visible";
//   } else {
//     x.style.visibility = "hidden";
//   }
// }

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


// $(document).ready(function(){
//   $(".click").click(function(){
//     $("").hide();
//   });
//   $(".close").click(function(){
//     $("p").show();
//   });
// });