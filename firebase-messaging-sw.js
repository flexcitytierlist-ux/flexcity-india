importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDZylrN12JJn11p4yQ9lCqd2MGOrr9jk7U",
  authDomain: "flex-city-tier-lists.firebaseapp.com",
  projectId: "flex-city-tier-lists",
  storageBucket: "flex-city-tier-lists.firebasestorage.app",
  messagingSenderId: "652569201048",
  appId: "1:652569201048:web:80bbd8bb452ea5c2f7c3ed"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || "Flex City Alert";
  const options = {
    body: payload.notification?.body || "New update or message!",
    icon: "https://api.dicebear.com/7.x/avataaars/svg?seed=FlexCity"
  };
  self.registration.showNotification(title, options);
});
