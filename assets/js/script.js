//day out of the year
let clock = moment().format('MMMM Do YYYY, h:mm:ss a');
$("currentDay").html(clock);

let eightEvent = document.getElementById("#8am")
let saveBtn = document.querySelector("#saveBtn");
let descriptionText = document.querySelector("#text");

// Need to get current hour and set class to past present future 
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
// Need to make a custom array with 3 elements, hour, event, and save button in local storage

saveBtn.addEventListener("click", function(event) {
    event.preventDefault();

    var descEvent = "";

    localStorage.setItem("description", JSON.stringify(descEvent));
    renderMessage();
});

function renderMessage() {
    var desc = JSON.parse(localStorage.getItem("description"));
    if(desc !== null){
        document.querySelector("description").textContent = desc;
    }
}