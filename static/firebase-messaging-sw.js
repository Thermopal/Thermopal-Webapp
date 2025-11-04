// // firebase-messaging-sw.js
// importScripts('https://www.gstatic.com/firebasejs/11.0.1/firebase-app-compat.js');
// importScripts('https://www.gstatic.com/firebasejs/11.0.1/firebase-messaging-compat.js');

// firebase.initializeApp({
//   apiKey: "AIzaSyBaT8NPePn_crgrLUDHscuBzZwOTg54Mpw",
//   authDomain: "thermopal-9b302.firebaseapp.com",
//   projectId: "thermopal-9b302",
//   storageBucket: "thermopal-9b302.firebasestorage.app",
//   messagingSenderId: "212325894246",
//   appId: "1:212325894246:web:92f39a3ca0553a78bac5a7"
// });

// const messaging = firebase.messaging();

// // Handle background messages
// messaging.onBackgroundMessage(payload => {
//   console.log('📬 Background message received:', payload);
//   const { title, body } = payload.notification;
//   self.registration.showNotification(title, {
//     body,
//     icon: '/static/icon-192.png',
//   });
// });

importScripts("https://www.gstatic.com/firebasejs/11.0.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/11.0.1/firebase-messaging-compat.js");

// ✅ Your Firebase config
firebase.initializeApp({
  apiKey: "AIzaSyBHEkIl9TeIl79ZHddt-jntLoHaerNK6nY",
  authDomain: "thermopal-e0fa5.firebaseapp.com",
  projectId: "thermopal-e0fa5",
  storageBucket: "thermopal-e0fa5.firebasestorage.app",
  messagingSenderId: "834090267127",
  appId: "1:834090267127:web:88f42e09a92c31a4e87ef2"
});

const messaging = firebase.messaging();

// ✅ Show background notifications
messaging.onBackgroundMessage(function(payload) {
  console.log('📦 Background message received:', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/static/icon-192.png'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
