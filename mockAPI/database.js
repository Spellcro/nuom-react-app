import firebase from "firebase";


export const config = {
  apiKey: 'AIzaSyBnTbbOhrM3faUi24kiaSOgU5ZKEgw7bhA',
  authDomain: "interviewbucket.firebaseapp.com",
  databaseURL: "https://interviewbucket.firebaseio.com",
  projectId: "interviewbucket",
  storageBucket: "",
  messagingSenderId: "775614938782",
  appId: "1:775614938782:web:29dac697d878138898858f"
};

class Firebase {
  constructor() {
    const firebaseApp = firebase.initializeApp(config);
    this.db = firebaseApp.firestore();
  }
}

const database = (function () {
  let instance

  function createInstance(){
    const firebase = new Firebase()
    return firebase
  }

  return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }


})()
 
export default database;