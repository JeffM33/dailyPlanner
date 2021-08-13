//day out of the year tried to setup to display in header
let clock = moment().format('MMMM Do YYYY, h:mm:ss a');
$("currentDay").html(clock);

// Setup elements for different hours need to be able to call these and save the desc in each one
let eightEvent = document.getElementById("#8am");
let nineEvent = document.getElementById("#9am");
let tenEvent = document.getElementById("#10am");
let elevenEvent = document.getElementById("#11am");
let twelveEvent = document.getElementById("#12pm");
let oneEvent = document.getElementById("#1pm");
let twoEvent = document.getElementById("#2pm");
let threeEvent = document.getElementById("#3pm");
let fourEvent = document.getElementById("#4pm");
let fiveEvent = document.getElementById("#5pm");

let saveBtn = document.querySelector("#saveBtn");
let descriptionText = document.querySelector("#text");

// Need to get current hour and set class to past present future 
// need to pass correct element variable through function to compare to current time?
function time() {
    let currentTime = moment().hour();

    if(currentTime === this.hour()){
        this.addClass("present");
    } else if (currentTime < this.hour()){
        this.addClass("future");
    } else {
        this.addClass("past");
    }
}

// added event listeners to save btn but i need to call on specific rows or ids so ccorrect desc gets updated
// Also trying to save in information in local storage, need to save with correct id
saveBtn.addEventListener("click", function(event) {
    event.preventDefault();

    var descEvent = "";

    localStorage.setItem("description", JSON.stringify(descEvent));
    renderMessage();
});

// need to fix so event will render and show up.
function renderMessage() {
    var desc = JSON.parse(localStorage.getItem("description"));
    if(desc !== null){
        document.querySelector("description").textContent = desc;
    }
}