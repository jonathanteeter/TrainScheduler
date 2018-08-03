<<<<<<< HEAD
# TrainSchedule
This is a train scheduling application that incorporates Firebase to store arrival and departure data real-time using Moment.js

## Design & Technology
* When adding trains to the schedule, include the following:
    * Train name
    * Destination
    * First train time
    * Frequency
* The train schedule is displayed to the website real-time to include the countdown until next arrivals.
* When creating the website table, include the following for each train:
    * Train name
    * Destination
    * Frequency
    * Next Arrival
    * Minutes Away
* Use Firebase to hosts the arrival and departure data.
* Key technologies used to build this application are:
    * Bootstrap framework
    * HTML
    * CSS
    * JavaScript
    * jQuery library
    * Moment.js
    * Firebase

## What the project does
* This is a train schedule application that stores arrival and departure data
* The project uses a table form to both:
    * Add trains to the schedule as an administrator and
    * Provide the daily train schedule to include next train arrival. 
* The website will provide up-to-date information about various trains, namely:
    * Their arrival times and 
    * How many minutes remain until they arrive at the station.

## Challenges
* Getting all the required information was challenging in different ways. For example:
    * Creating a Firebase event to "add trains to the database".
    * Adding a "row in the html" using jQuery when a user adds a train entry.
    * Calculating the first train time of the day.  This required pushing back 1 year to ensure the train comes before the current time.
* Using Moment.js took some time to:
    * Parse, validate, manipulate, and display dates and times in JavaScript.
    * Calculate all the times (first train, current time, difference in time, remainder, minutes until next train, arrival time)

## Link to [My Portfolio] 
(https://jonathanteeter.github.io/jtPortfolio/)


=======
# TrainScheduler
Train scheduler incorporates Firebase to store arival/departure data using Moment.js.

The steps to complete are:
   1. Initialize Firebase
   2. Create button for adding trains - then update the html + update the database
   3. When adding a train, submit the following:
      3a. Train Name
      3b. Destination 
      3c. First Train Time -- in military time
      3d. Frequency -- in minutes
      3e. Code this app to calculate when the next train will arrive; this should be relative to the current time.
      3f. Users from many different machines must be able to view same train times.
   4. Styling and theme are completely up to you. Get Creative!
>>>>>>> 40e19a3cce02457b09b59b96424d8f106c7f68e7
