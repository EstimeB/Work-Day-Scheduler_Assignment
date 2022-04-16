// Importing/calling moment js
let currentDay = moment();

// Display current day (header)
$('#currentDay').append(currentDay.format('dddd, MMMM Do, h:mm a'));

// Create html elements
let rows = $('<div>').addClass('work-scheduler-rows');
let workNotesBlocks = $('<div>').addClass('col-10');
let noteText = $('<textarea>');
let timeBlokcs = $('<div>').addClass('col-1 hour');
let saveBtnContainer = $('<div>').addClass('col-1');
let saveBtn = $('<button>').addClass('save-btn');

// console.log(rows);

// Function that incorporate the image and render saveBtn functional
function saveButtonFunc() {
    let img = $("<img src='./assets/images/saveBtn.png'>");
    img.width(30);
    saveBtn.attr('type', 'submit');
    saveBtn.html(img);
    return saveBtn;
}

// Function that brings the created html elements to live
function initWorkDaySchedProp() {
    let currentTime = moment().format('h:00a');
    // Using for to initialize (set conditions & increment)
    for (let i = 9; i < 18; i++) {
        // Time block
        let rowTime = moment().hour(i).format('h:00a');
        // Assigning ids to facilitate saving data to local storage
        noteText.attr('id', `hour-${i}`);
        timeBlokcs.text(rowTime);
        // if statement to compare the current time to the blocks assigned time
        if (currentTime === rowTime) {
            // Assigning classes to be used in stylesheet(assigning background colors) base on the comparison results
            workNotesBlocks.addClass('current');
            noteText.addClass('current');
        } else if (currentTime > rowTime){
            workNotesBlocks.addClass('past');
            noteText.addClass('past');
        } else {
            workNotesBlocks.addClass('future');
            noteText.addClass('future');
        }
        // Appending notes/text to container
        workNotesBlocks.append(noteText);
        // Appending variable(divs), afected by time, to rows(var/time container)
        rows.append(timeBlokcs, workNotesBlocks, saveBtnContainer);
        // Appeding rows to inner html
        $('.container').append(rows);
        // Append save button function to html created element saveBtnContainer
        saveBtnContainer.append(saveButtonFunc());
    }
}
initWorkDaySchedProp();

// To update html date and time
setInterval(() => {
    $('#currentDay').html(currentDay.format('dddd, MMMM Do, h:mm a'));
}, 1000);

