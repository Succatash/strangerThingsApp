/* eslint-disable react/prop-types */
import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom';
import RegisterUser from './components/Register';
import Login from './components/Login';
import {useState} from 'react';
import Home from './components/Home';
import CreatePost from './components/createPost';

function App() {
	const [userLoggedIn, setUserLoggedIn] = useState(false);
	const [token, setToken] = useState(null);
	const [username, setUsername] = useState('');
	//set up username state to past to posts

	return (
		<>
			<Navbar userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} />

			<Routes>
				<Route
					path="/"
					element={
						<Home
							token={token}
							userLoggedIn={userLoggedIn}
							username={username}
						/>
					}
				>
					<Route
						path="/makepost"
						element={<CreatePost token={token} />}
					></Route>
					{/* <Route path=":id/message" element={<Message />}></Route> */}
				</Route>

				<Route
					path="/registerUser"
					loader={() => {
						console.log('test');
					}}
					element={<RegisterUser />}
				></Route>

				<Route
					path="/login"
					element={
						<Login
							setUserLoggedIn={setUserLoggedIn}
							setToken={setToken}
							setUsername={setUsername}
						/>
					}
				></Route>
			</Routes>
		</>
	);
}
export default App;
