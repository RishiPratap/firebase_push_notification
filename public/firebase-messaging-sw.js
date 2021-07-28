importScripts('https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.8.0/firebase-messaging.js');


var firebaseConfig = {
  apiKey: "AIzaSyBQeOVdgoWN_iAp7JFNDBNV1GXhyMIMyKk",
  authDomain: "my-pwa-notification-152fd.firebaseapp.com",
  projectId: "my-pwa-notification-152fd",
  storageBucket: "my-pwa-notification-152fd.appspot.com",
  messagingSenderId: "33242534738",
  appId: "1:33242534738:web:2cc0f0db5d4afc1304208b",
  measurementId: "G-D9TFWPTYK7",
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();