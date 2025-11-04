// // firebase-notifications.js
// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
// import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-messaging.js";

// // ✅ Your Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBaT8NPePn_crgrLUDHscuBzZwOTg54Mpw",
//   authDomain: "thermopal-9b302.firebaseapp.com",
//   projectId: "thermopal-9b302",
//   storageBucket: "thermopal-9b302.firebasestorage.app",
//   messagingSenderId: "212325894246",
//   appId: "1:212325894246:web:92f39a3ca0553a78bac5a7"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const messaging = getMessaging(app);

// // ✅ Register Service Worker
// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('/firebase-messaging-sw.js')
//     .then(reg => console.log("Service Worker Registered:", reg))
//     .catch(err => console.error("Service Worker registration failed:", err));
// }

// // ✅ Request notification permission + get token
// async function requestPermission() {
//   const permission = await Notification.requestPermission();
//   if (permission === 'granted') {
//     console.log('🔔 Notification permission granted.');
//     const token = await getToken(messaging, {
//       vapidKey: 'BLch2zbnpXdzzV_OYtZicTjbefAURKoUyBtL8blEMcTciTYLMeGrGEorwMsSrRyGZ14vmH6mqAluZ87IaITT-3U'
//     });
//     console.log('✅ FCM Token:', token);

//     // Optionally send token to Flask backend
//     // await fetch('/register-token', {
//     //   method: 'POST',
//     //   headers: { 'Content-Type': 'application/json' },
//     //   body: JSON.stringify({ token }),
//     // });
//   } else {
//     console.warn('❌ Notification permission denied.');
//   }
// }

// // ✅ Handle foreground messages
// onMessage(messaging, (payload) => {
//   console.log('📩 Foreground notification:', payload);
//   new Notification(payload.notification.title, {
//     body: payload.notification.body,
//     icon: '/static/icon-192.png',
//   });
// });

// // ✅ Handle local timer-finished event from dashboard.html
// window.addEventListener('work-cycle-timer-finished', () => {
//   console.log("⏰ Timer finished, showing notification");
//   showLocalNotification("⏰ Work Cycle Time’s Up!", "Your countdown has ended.");
// });

// window.addEventListener('rest-cycle-timer-finished', () => {
//   console.log("⏰ Rest Timer finished, showing notification");
//   showLocalNotification("⏰ Rest Cycle Time’s Up!", "Your countdown has ended.");
// });

// window.addEventListener('new-conducting-remarks', () => {
//   console.log("⏰ New Conducting Instruction, showing notification");
//   showLocalNotification("⏰ New Instruction From Conducting!", "View your instruction.");
// });

// // ✅ Show local notification
// function showLocalNotification(title, body) {
//   if (Notification.permission === 'granted') {
//     navigator.serviceWorker.getRegistration().then(reg => {
//       if (reg) {
//         reg.showNotification(title, {
//           body,
//           icon: '/static/icon-192.png',
//           vibrate: [300, 200, 300],
//           actions: [{ action: "ok", title: "Got it" }]
//         });
//       } else {
//         new Notification(title, { body });
//       }
//     });
//   } else {
//     alert(`${title} - ${body}`);
//   }
// }

// // Initialize on page load
// requestPermission();
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-messaging.js";

// ✅ Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBHEkIl9TeIl79ZHddt-jntLoHaerNK6nY",
  authDomain: "thermopal-e0fa5.firebaseapp.com",
  projectId: "thermopal-e0fa5",
  storageBucket: "thermopal-e0fa5.firebasestorage.app",
  messagingSenderId: "834090267127",
  appId: "1:834090267127:web:88f42e09a92c31a4e87ef2"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// ✅ Register Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/static/firebase-messaging-sw.js')
    .then(reg => console.log("✅ Service Worker Registered:", reg))
    .catch(err => console.error("❌ Service Worker registration failed:", err));
}

// ✅ Request permission + get FCM token
async function requestPermission() {
  const permission = await Notification.requestPermission();
  if (permission === 'granted') {
    console.log('🔔 Notification permission granted.');
    try {
      const token = await getToken(messaging, {
        vapidKey: 'BMhHHQhRGf5pYG60HuQGn4qEy61QvH_CbV6xI20zMbOpQq3zunRRizUcLGRzYmvQDCVEYiF2IuOs3WuGNlKlysI'
      });
      console.log('✅ Device FCM Token:', token);

      // You can store this token or send to backend
      document.getElementById('token').value = token;

    } catch (err) {
      console.error('❌ Error getting token:', err);
    }
  } else {
    console.warn('❌ Notification permission denied.');
  }
}

// ✅ Handle foreground notifications
onMessage(messaging, (payload) => {
  console.log('📩 Foreground notification:', payload);
  new Notification(payload.notification.title, {
    body: payload.notification.body,
    icon: '/static/icon-192.png',
  });
});

// Initialize
requestPermission();
