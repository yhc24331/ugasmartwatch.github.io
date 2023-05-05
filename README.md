# ugasmartwatch.github.io 
> css folder
- Contains relevant css files. Currently, there is a file for the main user profile page (style.css) and one for the reminders page (remindersStyle.css).
> example.json
- Example JSON file with dummy steps and dates to populate Activity Graph of User Profile Page temporarily.
> index.html
- The main user profile page that contains all components needed. 
- Contains: 
    - battery
    - last synced
    - reminder shortcut
    - pet icon and info 
    - daily step goal
    - log section 
    - activity graph 
    - survey results
 > reminders.html
 > reminders.js
 - Contains js code for pop-up in reminder
 - contains the page to add customized reminders
 > userpf.js
 - contains the javascript needed for main user profile page. Currently, has JS code to populate activity graph and for datepicker.
 
 # Documentation - notes
 
 > ***Reminders.js/ Reminders.html***
 
 These are the variables needed for the alarm
  - id : "mytimer",  // optional ID for this alarm/timer, so apps can easily find their timers
  - appid : "myappid", // optional app ID for alarms that you set/use for your app
  - on : true,       // is the alarm enabled?
  - t : 23400000,    // Time of day since midnight in ms (if a timer, this is set automatically when timer starts)
  - dow : 0b1111111, // Binary encoding for days of the week to run alarm on
    //  SUN = 1
    //  MON = 2
    //  TUE = 4
    //  WED = 8
    //  THU = 16
    //  FRI = 32
    //  SAT = 64

  - date : "2022-04-04", // OPTIONAL date for the alarm, in YYYY-MM-DD format
  - msg : "Eat food",    // message to display.
  - last : 0,            // last day of the month we alarmed on - so we don't alarm twice in one day! (No change from 0 on timers)
  - rp : true,           // repeat the alarm every day? If date is given, pass an object instead of a boolean,
                       // e.g. repeat every 2 months: { interval: "month", num: 2 }.
                       // Supported intervals: day, week, month, year
  - del : false,         // if true, delete the timer after expiration
  > ***User Profile (index.html)***
  - Contains hardcoded values for Pet level and points, battery percentage,etc (not being retrieved from database)
  - NavBar - When admins login though login page: 
        - ADMIN logs in it should redirect to the index.html WITH ADMIN SETUP in navigation bar.
        - Otherwise, normal participant logins should NOT see the Admin Setup on nav bar in user profile page
        - When admins login it they should be able to access an EDITABLE version of the user profile page (index.html)
   - Survey Results: 
        - ADMIN sent surveys are denoted by the "red exclamation" in the survey results section of user profile page
