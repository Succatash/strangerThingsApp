/* eslint-disable react/prop-types */
import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom';
import RegisterUser from './components/Register';
import Login from './components/Login';
import {useState} from 'react';

function App() {
	const [userLoggedIn, setUserLoggedIn] = useState(false);

	return (
		<>
			<Navbar userLoggedIn={userLoggedIn} />

			<Routes>
				{/* <Route path="/" element={}></Route> */}
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
					element={<Login setUserLoggedIn={setUserLoggedIn} />}
				></Route>
			</Routes>
		</>
	);
}
export default App;
