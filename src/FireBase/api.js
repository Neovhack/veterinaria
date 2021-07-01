import React from "react";
import firebase from 'firebase/app';
import '@firebase/firestore'

const app =  firebase.initializeApp ({
    apiKey: "AIzaSyCeYQLOe5OkC6Wg__Ktw5RkMUROz0_2xVA",
    authDomain: "coderhouse-6ff49.firebaseapp.com",
    projectId: "coderhouse-6ff49",
    storageBucket: "coderhouse-6ff49.appspot.com",
    messagingSenderId: "1017588055861",
    appId: "1:1017588055861:web:c4e533034f9bc8957b567c"
  });

 export function getFirebase() {
      return app;
  }

  export function getFireStore() {
      return firebase.firestore(app);
  }