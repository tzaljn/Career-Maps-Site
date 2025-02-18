// Career Maps Selection Bar
var areasList = {
  Realistic: "Matching fields: Physics, Civil Engineering",
  Investigative: "Matching fields: Physics, Civil Engineering",
  Artistic: "Matching fields: Computer Science, Civil Engineering",
  Social: "Matching fields: Physics, Civil Engineering",
  Enterprising: "Matching fields: Computer Science, Computer Engineering",
  Conventional: "Matching fields: Statistics, Data Science",
} 

  // text input
var field = $(".field");

  // submit button
var fieldBttn = $(".fieldBttn");

  // container
var interestAreaContainer = $(".areaContainer");

  // Event Listeners
    // someElement.on("click", doSomeFunction)
fieldBttn.on("click", displayField);

  // Event Handlers & Other Functions
function displayField(event){
  event.preventDefault();
  var interestArea = field.val(); // take whatever was typed into the text box
  console.log(interestArea);

  interestAreaContainer.append(`<p>`+ areasList[interestArea] + `</p>`)
}


  // Typewriter effect for heading
var i = 0;
var text = "Explore different occupational titles within the realms of science, technology, engineering, and math. Map your interest areas to a potential career field!";
var speed = 50;
function typeWriter(){
  if(i<text.length){
    document.getElementById('captionHeader').innerHTML += text.charAt(i); i++;
    setTimeout(typeWriter, speed);
  }
}
