// Career Maps Selection Bar
var areasList = {
  Realistic: "<b>Matching fields:</b> Physics, Civil Engineering",
  Investigative: "<b>Matching fields:</b> Biology, Computer Science",
  Artistic: "<b>Matching fields:</b> Computer Science, Civil Engineering",
  Social: "<b>Matching fields:</b> Statistics, Civil Engineering",
  Enterprising: "<b>Matching fields:</b> Chemistry, Electrical Engineering",
  Conventional: "<b>Matching fields:</b> Statistics, Data Science",
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
var text = "Explore different occupational titles within the realms of science, technology, engineering, and math. \nMap your interest areas to a potential career field!";
var speed = 50;
function typeWriter(){
  if(i<text.length){
    document.getElementById('captionHeader').innerHTML += text.charAt(i); i++;
    setTimeout(typeWriter, speed);
  }
}


