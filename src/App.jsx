/* eslint-disable react/prop-types */
import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom';
import RegisterUser from './components/Register';
import Login from './components/Login';

function App() {
	return (
		<>
			<Navbar />

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
					element={<Login />}
				></Route>
			</Routes>
		</>
	);
}
export default App;
