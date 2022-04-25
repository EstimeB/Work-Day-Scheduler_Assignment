// Importing/calling moment js
let currentDay = moment();

// Display current day (header)
$('#currentDay').append(currentDay.format('dddd, MMMM Do, h:mm a'));

// Function that brings the created html elements to live
function initWorkDaySchedProp() {
    // Function that incorporate the image and render saveBtn functional
    function saveButtonFunc() {
        let saveBtn = $('<button>').addClass('saveBtn');
        let img = $("<img src='./assets/images/saveBtn.png'>");
        img.width(20);
        saveBtn.attr('type', 'submit');
        saveBtn.html(img);
        return saveBtn;
    }

    let currentTime = moment().format('h:00a');
    // Using for to initialize (set conditions & increment)
    for (let i = 9; i < 18; i++) {

        // Create html elements
        let rows = $('<div>').addClass('row');
        let workNotesBlocks = $('<div>').addClass('col-10');
        let noteText = $('<textarea>');
        let timeBlokcs = $('<div>').addClass('col-1 hour time');
        let saveBtnContainer = $('<div>').addClass('col-1');

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
        } else if (currentTime > rowTime) {
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
    // To update html date and time
    setInterval(() => {
        $('#currentDay').html(currentDay.format('dddd, MMMM Do, h:mm a'));
    }, 1000);

    // Loading existing data from local storage
    function loadData() {
        $("#hour-9").text(localStorage.getItem("hour-9"));
        $("#hour-10").text(localStorage.getItem("hour-10"));
        $("#hour-11").text(localStorage.getItem("hour-11"));
        $("#hour-12").text(localStorage.getItem("hour-12"));
        $("#hour-13").text(localStorage.getItem("hour-13"));
        $("#hour-14").text(localStorage.getItem("hour-14"));
        $("#hour-15").text(localStorage.getItem("hour-15"));
        $("#hour-16").text(localStorage.getItem("hour-16"));
        $("#hour-17").text(localStorage.getItem("hour-17"));
    }
    loadData();

    // Event listener to take and save data to local storage
    $(".saveBtn").on("click", function () {
        let h9 = $("#hour-9").val().trim();
        localStorage.setItem("hour-9", (h9));
        let h10 = $("#hour-10").val().trim();
        localStorage.setItem("hour-10", (h10));
        let h11 = $("#hour-11").val().trim();
        localStorage.setItem("hour-11", (h11));
        let h12 = $("#hour-12").val().trim();
        localStorage.setItem("hour-12", (h12));
        let h13 = $("#hour-13").val().trim();
        localStorage.setItem("hour-13", (h13));
        let h14 = $("#hour-14").val().trim();
        localStorage.setItem("hour-14", (h14));
        let h15 = $("#hour-15").val().trim();
        localStorage.setItem("hour-15", (h15));
        let h16 = $("#hour-16").val().trim();
        localStorage.setItem("hour-16", (h16));
        let h17 = $("#hour-17").val().trim();
        localStorage.setItem("hour-17", (h17));
    });
}
initWorkDaySchedProp();


