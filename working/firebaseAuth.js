// // Import the functions you need from the SDKs you need
// import * as firebase from 'firebase/app';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries


// const firebaseConfig = {
//   apiKey: "AIzaSyBHVrCMKyvd2_R4huPNIYIqUkVONRv7YSI",
//   authDomain: "e-commerce-application-632b5.firebaseapp.com",
//   projectId: "e-commerce-application-632b5",
//   storageBucket: "e-commerce-application-632b5.appspot.com",
//   messagingSenderId: "29609231322",
//   appId: "1:29609231322:web:83bdbfe955db6b87e1f6e3"
// };

// // Initialize Firebase
// let app;
// if(firebase.apps.length === 0){
//     app = firebase.initializeApp(firebaseConfig)
// }
// else{
//     app = firebase.app()
// }

// const auth = firebase.auth();
// export { auth };
// // const app = initializeApp(firebaseConfig);

import {initializeApp} from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBHVrCMKyvd2_R4huPNIYIqUkVONRv7YSI",
  authDomain: "e-commerce-application-632b5.firebaseapp.com",
  projectId: "e-commerce-application-632b5",
  storageBucket: "e-commerce-application-632b5.appspot.com",
  messagingSenderId: "29609231322",
  appId: "1:29609231322:web:83bdbfe955db6b87e1f6e3"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;