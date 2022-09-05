import {initializeApp} from "firebase/app";
import {getAuth, signOut, updatePassword} from 'firebase/auth'
import {getStorage} from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyCqJZEcDOrTqHpA4OBYTNVfJ37A20K5HCo",
	authDomain: "doctor-16b04.firebaseapp.com",
	databaseURL: "https://doctor-16b04-default-rtdb.firebaseio.com",
	projectId: "doctor-16b04",
	storageBucket: "doctor-16b04.appspot.com",
	messagingSenderId: "231625192386",
	appId: "1:231625192386:web:05fd471a0ee58e7d2d9c5b"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const storage = getStorage(app)

export const updatePasswordPerson = (newPassword) => {
	updatePassword(auth.currentUser, newPassword).then(r => console.log(r))
}

export const handleSignOut = () => signOut(auth)