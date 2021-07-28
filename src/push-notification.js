import firebase from "firebase";

export const initializeFirebase = () => {
  var firebaseConfig = {
    apiKey: "AIzaSyBQeOVdgoWN_iAp7JFNDBNV1GXhyMIMyKk",
    authDomain: "my-pwa-notification-152fd.firebaseapp.com",
    projectId: "my-pwa-notification-152fd",
    storageBucket: "my-pwa-notification-152fd.appspot.com",
    messagingSenderId: "33242534738",
    appId: "1:33242534738:web:2cc0f0db5d4afc1304208b",
    measurementId: "G-D9TFWPTYK7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
};
export const askForPermissioToReceiveNotifications = async () => {
  try {
    const messaging = firebase.messaging();
    await messaging.requestPermission();
    const token = await messaging.getToken();
    prompt(token);
    
    return token;
  } catch (error) {
    console.error(error);
  }
}
  export default initializeFirebase;