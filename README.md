# TrainScheduler
## Introduction
Train scheduler incorporates Firebase to store arival/departure data using Moment.js

## What the project does
This is a train schedule application that incorporates Firebase to host arrival and departure data incorporating Moment.js. The project uses a form to both (1) add trains to the schedule as an administrator and (2) provide the daily train schedule to include next train arrival. The website will provide up-to-date information about various trains, namely their arrival times and how many minutes remain until they arrive at the station.

## Why the project is useful
- This was an exercise in using these web technologies:  HTML, CSS, JavaScript, jQuery, Moment.js library and Firebase.
- Many Moment.js methods and formats were used to parse, validate, manipulate, and display dates and times in JavaScript.

## Challenges
Getting all the required information in the table was challenging in different ways. For example:
- Creating a Firebase event for "adding trains to the database" and a jQuery "row in the html" when a user adds an train entry 
- Figuring the first train time of the day required pushing back 1 year to make sure the train comes before the current time.
- Calculating all the required times using Moment.js (first train, current time, difference in time, remainder, minutes until next train, arrival time)

## Link to [My Portfolio] 
(https://teeterjm58.github.io/jtPortfolio/)


