// Importing/calling moment js
let currentDay = moment();

// Display current time (header)
$('#currentDay').append(currentDay.format('dddd, MMMM Do'));

// Create html elements
let rows = $('<div>').addclass('work-scheduler-rows');
let workNotesBlock = $('<div>').addclass('col-10');
let noteText = $('<textarea>');
let timeBlokcs = $('<di>').addclass('col-1');
let saveBtnContainer = $('<div>').addclass('col-1');
let saveBtn = $('<button>').addclass('save-btn');

// Function that incorporate the image and render saveBtn functional
function saveButtonFunc() {
    let img = $("<img src='./assets/images/saveBtn.png'>");
    img.width(30);
    saveBtn.attr('type', 'submit');
    saveBtn.html(img);
}