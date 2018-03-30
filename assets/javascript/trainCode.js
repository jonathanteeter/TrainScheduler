/* global firebase 
 */
// Steps to complete:

// 1. Initialize Firebase
// 2. Create button for adding trains - then update the html + update the database
// 3. When adding a train, submit the following:
// 3a. Train Name
// 3b. Destination 
// 3c. First Train Time -- in military time
// 3d. Frequency -- in minutes
// 3e. Code this app to calculate when the next train will arrive; this should be relative to the current time.
// 3f. Users from many different machines must be able to view same train times.
// 4. Styling and theme are completely up to you. Get Creative!

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAAV1VuH3LEpUZHKvazhtGH5t5nFMdepPI",
    authDomain: "lionel-schedule.firebaseapp.com",
    databaseURL: "https://lionel-schedule.firebaseio.com",
    projectId: "lionel-schedule",
    storageBucket: "lionel-schedule.appspot.com",
    messagingSenderId: "847613654164"
  };

firebase.initializeApp(config);

var database = firebase.database();

// 2. Button for adding Trains
$("#add-train-btn").on("click", function(event) {
  event.preventDefault();

  // Grabs user input
  var trainName = $("#train-name-input").val().trim();
  var destination = $("#destination-input").val().trim();
  var frequency = $("#frequency-input").val().trim();
  var firstTrainTime = $("#first-train-input").val().trim();


  console.log(moment().format('LT'));
  var convertFirstTrainTime = firstTrainTime.split(":");
  console.log(convertFirstTrainTime);
  var newFormatTime = moment().hours(convertFirstTrainTime[0]).minutes(convertFirstTrainTime[1])
  console.log(newFormatTime);



  // var frequencyInHours = parseInt(frequency);
  // console.log("frequency" + " " + frequency + " " + frequencyInHours);
  // var nextTrainTime = firstTrainTime + frequencyInHours;
  // console.log("Next Train Time: " + nextTrainTime);


  
  
  // var currentTime = moment().toString();
  // console.log("Current Time is: "  + currentTime);


  // moment.duration().asMinutes()


  // moment().add('hour', 1.5).toString()

  // moment('2014-11-15').fromNow()
  
  // var d = moment.duration(3, 'days')
  // d.add(2, 'days')


  // Creates local "temporary" object for holding train schedule data
  var trainSchedule = {
    name: trainName,
    role: destination,
    start: firstTrainTime,
    rate: frequency
  };

  // Uploads train schedules data to the database
  database.ref().push(trainSchedule);

  // Logs everything to console
  console.log(trainSchedule.name);
  console.log(trainSchedule.role);
  console.log(trainSchedule.start);
  console.log(trainSchedule.rate);

  // Alert
  alert("Train Schedule successfully added");

  // Clears all of the text-boxes
  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#first-train-input").val("");
  $("#frequency-input").val("");
});

// 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot, prevChildKey) {
  console.log(childSnapshot);
  console.log(childSnapshot.val());

  // Store everything into a variable.
  var trainName = childSnapshot.val().name;
  var destination = childSnapshot.val().role;
  var firstTrainTime = childSnapshot.val().start;
  var frequency = childSnapshot.val().rate;

  // Train Info
  console.log(trainName);
  console.log(destination);
  console.log(firstTrainTime);
  console.log(frequency);
  // console.log(nextTrainTime);


  // Prettify the employee start
  // var trainStartPretty = moment.unix(trainStart).format("MM/DD/YY");

  // Calculate the months worked using hardcore math
  // To calculate the months worked
  // var empMonths = moment().diff(moment.unix(empStart, "X"), "months");
  // console.log(empMonths);

  // Calculate the total billed rate
  // var empBilled = empMonths * empRate;
  // console.log(empBilled);

  // Add each train's data into the table
  $("#train-table").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" + frequency + "</td><td>" + firstTrainTime + "</td></tr>");


});



// Example Time Math
// -----------------------------------------------------------------------------
// Assume Employee start date of January 1, 2015
// Assume current date is March 1, 2016

// We know that this is 15 months.
// Now we will create code in moment.js to confirm that any attempt we use mets this test case


// Santa Fe
// Union Pacific
// Norfolk and Western
// Rio Grande

