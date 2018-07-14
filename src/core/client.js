import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCdX86tK2URwaO-WUzL75pYTrjL5VpW3XM",
  authDomain: "yoworld-210204.firebaseapp.com",
  databaseURL: "https://yoworld-210204.firebaseio.com",
  projectId: "yoworld-210204",
  storageBucket: "yoworld-210204.appspot.com",
  messagingSenderId: "987488401352",
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const auth = firebase.auth
export const provider = new firebase.auth.FacebookAuthProvider()
