function addRecommendation() 
{
    var textValue=document.getElementById("new_recommendation");
    if(textValue=="")
    {
        blankCheckHandler();
    }
    else
 {
  // Get the message of the new recommendation
  let recommendation = document.getElementById("new_recommendation");
  // If the user has left a recommendation, display a pop-up
  if (recommendation.value != null && recommendation.value.trim() != "") {
    console.log("New recommendation added");
    //Call showPopup here

    // Create a new 'recommendation' element and set it's value to the user's message
    var element = document.createElement("div");
    element.setAttribute("class","recommendation");
    element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation.value + "\<span\>&#8221;\</span\>";
    // Add this element to the end of the list of recommendations
    document.getElementById("all_recommendations").appendChild(element); 
    
    // Reset the value of the textarea
    recommendation.value = "";
    showPopup(true);
   }
 }
}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}
function blank_check(bool)
{
    var textBox=document.getElementById("new_recommendation");
    var textVal=textBox.value;
    var warn=document.getElementById("warning");
    if(textVal=="" && (bool))
    {
        const warning='<img src="https://t4.ftcdn.net/jpg/05/56/58/83/360_F_556588353_BTWI1ehqL6ZPeCZNS7yDh2vjLFmDhtsc.jpg"> Field is empty';
        warn.innerHTML=warning;
        textBox.focus();
    }
    else
    {
        warn.innerHTML="";
    }
}

function blankCheckHandler() {
  blank_check(false);
}
document.addEventListener("submit", function(){
var temp=document.getElementById("new_recommendation");
    temp.blur();
});
