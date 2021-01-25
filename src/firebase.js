import app from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyAXhZnsCSEvuQlpIAhFAxQBxrCcf1N4Up8',
	authDomain: 'crud-react-a6738.firebaseapp.com',
	projectId: 'crud-react-a6738',
	storageBucket: 'crud-react-a6738.appspot.com',
	messagingSenderId: '409049499677',
	appId: '1:409049499677:web:1012d9f44e51ca221b1ef4',
};
// Initialize Firebase
app.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();

export { db, auth };
