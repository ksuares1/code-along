// Add user to firebase realtime database
// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js';
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from 'https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyBRtVCF3Nkw2UPp1qXvadbtxxv5KQjfqsE',
	authDomain: 'codealong-gdi.firebaseapp.com',
	projectId: 'codealong-gdi',
	storageBucket: 'codealong-gdi.appspot.com',
	messagingSenderId: '127616918812',
	appId: '1:127616918812:web:a27383d1e7c534310f06d9',
	measurementId: 'G-K24VT7JK1E',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// Get all the objects of html
let fullname = document.getElementById('fullname');
let email = document.getElementById('inputEmail');
let password = document.querySelector('.password');
let loginEmail = document.getElementById('staticEmail');
let loginPassword = document.querySelector('.loginPassword');

// Function to store data
window.signup = function (e) {
	e.preventDefault();
	const obj = {
		userName: fullname.value,
		userEmail: email.value,
		userPassword: password.value,
	};
	// Check if the password is not empty
	if (!obj.userPassword.trim()) {
		alert('Please enter a password');
		return;
	}

	createUserWithEmailAndPassword(auth, obj.userEmail, obj.userPassword)
		.then(function (userCredential) {
			const user = userCredential.user;

			// Set user display name
			updateProfile(user, {
				displayName: obj.userName,
			});

			alert('Signup succesful');

			// Redirect to index.html after successful signup
			window.location.href = 'signin.html';
		})
		.catch(function (err) {
			alert('error' + err);
		});
};

window.signin = function (e) {
	e.preventDefault();
	const obj = {
		userName: fullname.value,
		userEmail: loginEmail.value,
		userPassword: loginPassword.value,
	};

	signInWithEmailAndPassword(auth, obj.userEmail, obj.userPassword)
		.then(function (userCredential) {
			alert('Signin succesful');
			// Signed in
			const user = userCredential.user;

			// Store user details in localStorage
			localStorage.setItem('userId', user.uid);
			localStorage.setItem('userName', user.displayName);
			localStorage.setItem('userEmail', user.email);

			// Redirect to index.html after successful sigin
			window.location.href = 'index.html';
		})
		.catch(function (err) {
			alert("User doesn't exist!");
			console.log(err.message);
		});
};

// Retrieve user details from localStorage
function getUserDetailsFromLocalStorage() {
	const userId = localStorage.getItem('userId');
	const userName = localStorage.getItem('userName');
	const userEmail = localStorage.getItem('userEmail');

	if (userId && userEmail) {
		console.log('User Details:', { userId, userName, userEmail });
		window.location.href = 'index.html';
	} else {
		console.log('User details not found in localStorage');
	}
}

// Call this function to retrieve user details after page load
getUserDetailsFromLocalStorage();
