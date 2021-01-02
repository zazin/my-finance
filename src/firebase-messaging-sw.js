importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-messaging.js');
firebase.initializeApp({
  apiKey: 'AIzaSyC-pbLUoy1J-1Y3HcCDXkcx2sJZ3paWCoo',
  authDomain: 'my-finance-b202b.firebaseapp.com',
  projectId: 'my-finance-b202b',
  storageBucket: 'my-finance-b202b.appspot.com',
  messagingSenderId: '207218442468',
  appId: '1:207218442468:web:d4776b2330d9c3b88facf1',
  measurementId: 'G-0Z5DE3553X'
});
const messaging = firebase.messaging();
