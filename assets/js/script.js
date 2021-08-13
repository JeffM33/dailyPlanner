//day out of the year
var dayYear = moment().format("MMM Do, YYYY");
$("#currentDay").text(dayYear);

// Keeps track of current time of the day
var time = moment().format("hh:mm:ss");
$("#currentTime").text(time);