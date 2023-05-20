$(function () {
  // Add listener for click events on save button
  $('.saveBtn').on('click', function() {
  // Get user input and time-block id
  var userInput = $(this).siblings('.description').val().trim();
  var timeBlockId = $(this).parent().attr('id');
  
  // Save user input to local storage using time-block id as key
  localStorage.setItem(timeBlockId, userInput);
  });
  
  // Add past, present, or future class to each time-block
  function setTimeBlockClass() {
  var currentHour = dayjs().format('H');

  $('.time-block').each(function() {
    var timeBlockHour = $(this).attr('id').split('-')[1];
  
    if (timeBlockHour < currentHour) {
      $(this).removeClass('present future').addClass('past');
    }
    else if (timeBlockHour == currentHour) {
      $(this).removeClass('past future').addClass('present');
    }
    else {
      $(this).removeClass('past present').addClass('future');
    }
  });
  }
  setTimeBlockClass();
  
  // Get user input from local storage and set textarea values
  $('.description').each(function() {
  var timeBlockId = $(this).parent().attr('id');
  var storedInput = localStorage.getItem(timeBlockId);

  if (storedInput !== null) {
    $(this).val(storedInput);
  }
  });
  
  // Display current date in header
  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY hh:mm A'));
  });