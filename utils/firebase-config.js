const firebase = require("firebase/app");
require('firebase/database');

var config = {
  apiKey: "AIzaSyAL7G38vcWy8nyPEIo-AKDQb6lLoxu-ldw",
  authDomain: "krugue-bot.firebaseapp.com",
  projectId: "krugue-bot",
  storageBucket: "krugue-bot.appspot.com",
  messagingSenderId: "474254968378",
  appId: "1:474254968378:web:971d09540aac92081d5703",
  databaseURL: "https://krugue-bot-default-rtdb.firebaseio.com/"
}

firebase.initializeApp(config);

const database = firebase.database();

module.exports = database;

