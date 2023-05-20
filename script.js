$(function () {
  // Adds listener for click events for save button
  $('.saveBtn').on('click', function() {
    // Gets user input / time-block id
    var userInput = $(this).siblings('.description').val().trim();
    var timeBlockId = $(this).parent().attr('id');
  
    // Saves user input to local storage using time-block id as key
    localStorage.setItem(timeBlockId, userInput);
  });
  
  // Adds past / present / future class to each time block
  function setTimeBlockClass() {
    var currentHour = dayjs().hour(); // Gets current hour
  
    $('.time-block').each(function() {
      var timeBlockHour = parseInt($(this).attr('id').split('-')[1]);
  
      if (timeBlockHour < currentHour) {
        $(this).removeClass('present future').addClass('past');
      }
      else if (timeBlockHour === currentHour) {
        $(this).removeClass('past future').addClass('present');
      }
      else {
        $(this).removeClass('past present').addClass('future');
      }
    });
  }
  
  setTimeBlockClass();
  
  // Gets user input from local storage and sets values
  $('.description').each(function() {
    var timeBlockId = $(this).parent().attr('id');
    var storedInput = localStorage.getItem(timeBlockId);
  
    if (storedInput !== null) {
      $(this).val(storedInput);
    }
  });
  
  // Displays current date and time in header
  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY hh:mm A'));
});
