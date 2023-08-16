/* eslint-disable react/prop-types */
import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom';
import RegisterUser from './components/Register';
import Login from './components/Login';
import {useState} from 'react';
import Main from './components/Main';

function App() {
	const [userLoggedIn, setUserLoggedIn] = useState(false);
	const [token, setToken] = useState(null);

	return (
		<>
			<Navbar userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} />

			<Routes>
				<Route
					path="/"
					element={<Main token={token} userLoggedIn={userLoggedIn} />}
				></Route>
				<Route
					path="/registerUser"
					loader={() => {
						console.log('test');
					}}
					element={<RegisterUser />}
				></Route>

				<Route
					path="/login"
					loader={() => {
						console.log('test');
					}}
					element={
						<Login setUserLoggedIn={setUserLoggedIn} setToken={setToken} />
					}
				></Route>
			</Routes>
		</>
	);
}
export default App;
