
var config = {
    apiKey: "AIzaSyAK-7V3R1rv5e1sb1z65EN6OvWdyiGWYB4",
    authDomain: "train-schedule-6dac1.firebaseapp.com",
    databaseURL: "https://train-schedule-6dac1.firebaseio.com",
    projectId: "train-schedule-6dac1",
    storageBucket: "train-schedule-6dac1.appspot.com",
    messagingSenderId: "932291604279"
};

firebase.initializeApp(config);

var database = firebase.database();

var trainName = "";
var startTime = "";
var destination = "";
