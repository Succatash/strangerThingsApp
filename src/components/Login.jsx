/* eslint-disable react/prop-types */
import {useState} from 'react';

import styles from './login.module.css';
import {useNavigate} from 'react-router-dom';

const Login = ({setToken, setUserLoggedIn, setUsername}) => {
	const navigate = useNavigate();

	const [visible, setVisible] = useState(false);
	const [focusPlaceholderPassword, setFocusPlaceHolder] = useState('Password');
	const [focusPlaceholderUsername, setFocusPlaceholderUsername] =
		useState('Username');

	const login = async (userObj) => {
		try {
			const response = await fetch(
				`${'https://strangers-things.herokuapp.com/api/2302-ACC-ET-WEB-PT-E'}/users/login`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						user: {
							username: userObj.username,
							password: userObj.password,
						},
					}),
				}
			);

			const result = await response.json();

			if (result.success) {
				setUserLoggedIn(true);
				setUsername(userObj.username);
				setToken(result?.data?.token);
				navigate('/');
			}
			console.log(result);
			return result;
		} catch (err) {
			console.error(err);
		}
	};

	// useEffect(() => {
	// 	login(user);
	// });

	return (
		<div className={styles.registerUserContainer}>
			<div className={styles.modalContainer}>
				<h2>Welcome to Stranger Things</h2>
				<div className={styles.titleSaying}>
					Create a{' '}
					<span className={styles.strangerThingSpan}> Stranger Things</span>{' '}
					account, to{' '}
					<span
						style={{
							fontWeight: 'bold',
							textTransform: 'uppercase',
							letterSpacing: '-1px',
						}}
					>
						buy
					</span>{' '}
					and{' '}
					<span
						style={{
							fontWeight: 'bold',
							textTransform: 'uppercase',
							letterSpacing: '-1px',
						}}
					>
						sell
					</span>{' '}
					the your favorite items
				</div>

				{/* form begins here */}

				<form
					action=""
					method="post"
					className={styles.registerFormContainer}
					onSubmit={(e) => {
						e.preventDefault();

						//  TODO::  refactor to use Formdata instead of a useState object
						// 	i think i create a global empty formstate and then append the stuff i need to it and get it in the post call
						// const fd = new FormData(e.currentTarget);
						//  setRegisteredUser([...fd]);

						login({
							username: e.target.registeredUserName.value,
							password: e.target.registeredPassword.value,
						});

						e.target.reset();
					}}
				>
					<div className={styles.form_group}>
						<label
							htmlFor="registeredUserName"
							className={styles.label}
						></label>
						<input
							type="text"
							name="registeredUserName"
							placeholder={focusPlaceholderUsername}
							className={styles.registerInputField}
							onFocus={() => {
								setFocusPlaceholderUsername('');
							}}
							onBlur={() => {
								setFocusPlaceholderUsername('Username');
							}}
							autoComplete="username"
						/>
					</div>
					<div className={styles.form_group}>
						<label
							htmlFor="registeredPassword"
							className={styles.labelPassword}
						></label>
						<input
							type={visible ? 'type' : 'password'}
							required
							placeholder={focusPlaceholderPassword}
							name="registeredPassword"
							className={styles.registerInputField}
							onFocus={() => {
								setFocusPlaceHolder('');
							}}
							onBlur={() => {
								setFocusPlaceHolder('Password');
							}}
							autoComplete="current-password"
						/>
						{visible ? (
							<span
								className={styles.showPassword}
								onClick={() => {
									setVisible(false);
								}}
							>
								<i className="fa-solid fa-eye-slash fa-2xl "></i>
							</span>
						) : (
							<span
								className={styles.showPassword}
								onClick={() => {
									setVisible(true);
								}}
							>
								<i className="fa-solid fa-eye fa-2xl"></i>
							</span>
						)}
					</div>
					<input
						type="submit"
						value="Submit"
						className={styles.registerButton}
					/>
				</form>
				<div
					style={{
						background: 'rgba(0, 0, 0, 0.05)',
						height: '5px',
						border: 'none',
						top: -25,
						position: 'relative',
						width: 407,
						margin: 'auto',
					}}
				></div>
				<p className={styles.or}>OR</p>

				<input
					type="submit"
					value="Create Account"
					className={styles.createAccountButton}
					onClick={() => navigate('/registerUser')}
				/>
			</div>
		</div>
	);
};
export default Login;
