
function showCustomOptions() {
  // Create the popup window
  var popup = window.open("", "custom-options", "width=400,height=400");

  // Write the custom options to the popup window
  var customOptions = "<h2>Custom options</h2>" +
                      "<label for='custom-frequency'>Frequency:</label>" +
                      "<input type='number' id='custom-frequency' name='custom-frequency' min='1' max='7' step='1' value='1'> times per week<br>" +
                      "<label for='custom-days'>Days:</label>" +
                      "<input type='checkbox' id='custom-days-mon' name='custom-days' value='monday'> <label for='custom-days-mon'>Mon</label>" +
                      "<input type='checkbox' id='custom-days-tue' name='custom-days' value='tuesday'> <label for='custom-days-tue'>Tue</label>" +
                      "<input type='checkbox' id='custom-days-wed' name='custom-days' value='wednesday'> <label for='custom-days-wed'>Wed</label>" +
                      "<input type='checkbox' id='custom-days-thu' name='custom-days' value='thursday'> <label for='custom-days-thu'>Thu</label>" +
                      "<input type='checkbox' id='custom-days-fri' name='custom-days' value='friday'> <label for='custom-days-fri'>Fri</label><br>" +
                      "<label for='custom-end'>End:</label>" +
                      "<select id='custom-end' name='custom-end'>" +
                        "<option value='never'>Never</option>" +
                        "<option value='on'>On:</option>" +
                        "<option value='after'>After:</option>" +
                      "</select>" +
                      "<input type='date' id='custom-end-date' name='custom-end-date' style='display:none;'>" +
                      "<input type='number' id='custom-end-occurrences' name='custom-end-occurrences' style='display:none;'> occurrences";
  
  popup.document.write(customOptions);
  
  // Close the popup window after 5 seconds
  setTimeout(function() {
    popup.close();
  }, 5000);
}

document.getElementById("repeat").addEventListener("change", function() {
  var customRepeat = document.getElementById("custom-repeat");
  if (this.value == "custom") {
    showCustomOptions();
    customRepeat.style.display = "block";
  } else {
    customRepeat.style.display = "none";
  }
});

document.getElementById("custom-end").addEventListener("change", function() {
  var customEndDate = document.getElementById("custom-end-date");
  var customEndOccurrences = document.getElementById("custom-end-occurrences");
  if (this.value == "on") {
    customEndDate.style.display = "inline-block";
    customEndOccurrences.style.display = "none";
  } else if (this.value == "after") {
    customEndDate.style.display = "none";
    customEndOccurrences.style.display = "inline-block";
  } else {
    customEndDate.style.display = "none";
    customEndOccurrences.style.display = "none";
  }
});
