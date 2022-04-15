// Importing/calling moment js
let currentDay = moment();

// Display current day (header)
$('#currentDay').append(currentDay.format('dddd, MMMM Do'));

// Create html elements
let rows = $('<div>').addclass('work-scheduler-rows');
let workNotesBlock = $('<div>').addclass('col-10');
let noteText = $('<textarea>');
let timeBlokcs = $('<di>').addclass('col-1 hour');
let saveBtnContainer = $('<div>').addclass('col-1');
let saveBtn = $('<button>').addclass('save-btn');

// Function that incorporate the image and render saveBtn functional
function saveButtonFunc() {
    let img = $("<img src='./assets/images/saveBtn.png'>");
    img.width(30);
    saveBtn.attr('type', 'submit');
    saveBtn.html(img);
}

// Function that brings the created html elements to live
function initWorkDaySchedProp() {
    // Using for to initialize (set conditions & increment)
    for (let i = 9; i < 18; i++) {
        // Time block
        let rowTime = moment().hour(i).format('HH:00 a');
        // Assigning ids to facilitate saving data to local storage
        noteText.attr('id', `hour-${i}`);
        timeBlokcs.text(rowTime);
        // if statement to compare the current time to the blocks assigned time
        let currentTime = moment().format('HH:00 a')
        if (currentTime === rowTime) {
            // Assigning classes to be used in stylesheet(assigning background colors) base on the comparison results
            workNotesBlock.addclass('current');
            noteText.addclass('current');
        } else if (currentTime > rowTime){
            workNotesBlock.addclass('past');
            noteText.addclass('past');
        } else if (currentTime < rowTime) {
            workNotesBlock.addclass('future');
            noteText.addclass('future');
        }
        // Appending notes/text to container
        workNotesBlock.append(noteText);
        // Appending variable(divs), afected by time, to rows(var/time container)
        rows.append(timeBlokcs, workNotesBlock);
        // Appeding rows to inner html
        $('.container').append(rows);
    }
}