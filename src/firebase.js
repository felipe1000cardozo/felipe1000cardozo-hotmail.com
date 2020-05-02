import app from "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyDzMlJbNwyeXOXSqzFdJ2vBvP9cQKpGMiU",
  authDomain: "vehicles-5f737.firebaseapp.com",
  databaseURL: "https://vehicles-5f737.firebaseio.com",
  projectId: "vehicles-5f737",
  storageBucket: "vehicles-5f737.appspot.com",
  messagingSenderId: "920753052891",
  appId: "1:920753052891:web:15e0009289b8d5f7f2c0fe",
  measurementId: "G-0XWWT5DF8R",
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);

    this.app = app.database();
    this.storage = app.storage();
  }

  // getVehicleById = async (id) => {
  //   let resp = "test";
  //   this.app
  //     .ref("vehicles")
  //     .child(`/${id - 1}`)
  //     .once("value")
  //     .then((snapshot) => {
  //       console.log(snapshot.val());
  //       resp = snapshot.val();
  //       return resp;
  //     });
  // };

  login(email, password) {
    return app.auth().signInWithEmailAndPassword(email, password);
  }

  logout() {
    return app.auth().signOut();
  }

  // async register(nome, email, password) {
  //   await app.auth().createUserWithEmailAndPassword(email, password);

  //   const uid = app.auth().currentUser.uid;

  //   return app.database().ref("usuarios").child(uid).set({
  //     nome: nome,
  //   });
  // }

  isInitialized() {
    return new Promise((resolve) => {
      app.auth().onAuthStateChanged(resolve);
    });
  }

  getCurrent() {
    return app.auth().currentUser && app.auth().currentUser.email;
  }

  // getCurrentUid() {
  //   return app.auth().currentUser && app.auth().currentUser.uid;
  // }

  // async getUserName(callback) {
  //   if (!app.auth().currentUser) {
  //     return null;
  //   }

  //   const uid = app.auth().currentUser.uid;
  //   await app
  //     .database()
  //     .ref("usuarios")
  //     .child(uid)
  //     .once("value")
  //     .then(callback);
  // }
}

export default new Firebase();
