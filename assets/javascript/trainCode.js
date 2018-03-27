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

// 1. Initialize Firebase
var config = {
  apiKey: "AIzaSyAYAADeGKkWgCFYNaDYHAGNYPB4m92aLZE",
  authDomain: "timesheet-816c5.firebaseapp.com",
  databaseURL: "https://timesheet-816c5.firebaseio.com",
  projectId: "timesheet-816c5",
  storageBucket: "timesheet-816c5.appspot.com",
  messagingSenderId: "916317371578"
};

firebase.initializeApp(config);

var database = firebase.database();

// 2. Button for adding Employees
$("#add-employee-btn").on("click", function(event) {
  event.preventDefault();

  // Grabs user input
  var empName = $("#employee-name-input").val().trim();
  var empRole = $("#role-input").val().trim();
  var empStart = moment($("#start-input").val().trim(), "DD/MM/YY").format("X");
  var empRate = $("#rate-input").val().trim();

  // Creates local "temporary" object for holding employee data
  var newEmp = {
    name: trainName,
    role: destination,
    start: firstTrainTime,
    rate: frequency
  };

  // Uploads employee data to the database
  database.ref().push(newEmp);

  // Logs everything to console
  console.log(newEmp.name);
  console.log(newEmp.role);
  console.log(newEmp.start);
  console.log(newEmp.rate);

  // Alert
  alert("Employee successfully added");

  // Clears all of the text-boxes
  $("#employee-name-input").val("");
  $("#role-input").val("");
  $("#start-input").val("");
  $("#rate-input").val("");
});

// 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot, prevChildKey) {
  console.log(childSnapshot);
  console.log(childSnapshot.val());

  // Store everything into a variable.
  var trainName = childSnapshot.val().name;
  var destination = childSnapshot.val().role;
  var frequency = childSnapshot.val().start;
  var frequency = childSnapshot.val().rate;

  // Employee Info
  console.log(empName);
  console.log(empRole);
  console.log(empStart);
  console.log(empRate);

  // Prettify the employee start
  var empStartPretty = moment.unix(empStart).format("MM/DD/YY");

  // Calculate the months worked using hardcore math
  // To calculate the months worked
  var empMonths = moment().diff(moment.unix(empStart, "X"), "months");
  console.log(empMonths);

  // Calculate the total billed rate
  var empBilled = empMonths * empRate;
  console.log(empBilled);

  // Add each train's data into the table
  $("#employee-table > tbody").append("<tr><td>" + empName + "</td><td>" + empRole + "</td><td>" +
  empStartPretty + "</td><td>" + empMonths + "</td><td>" + empRate + "</td><td>" + empBilled + "</td></tr>");
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

