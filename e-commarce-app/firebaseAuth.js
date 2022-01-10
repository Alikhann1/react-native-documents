
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBHVrCMKyvd2_R4huPNIYIqUkVONRv7YSI",
  authDomain: "e-commerce-application-632b5.firebaseapp.com",
  projectId: "e-commerce-application-632b5",
  storageBucket: "e-commerce-application-632b5.appspot.com",
  messagingSenderId: "29609231322",
  appId: "1:29609231322:web:83bdbfe955db6b87e1f6e3"
};


if(!firebase.apps.length ){
    firebase.initializeApp(firebaseConfig)
}
export default firebase;