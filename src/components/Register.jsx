import {useState, useEffect} from 'react';
import styles from './register.module.css';
import {useNavigate} from 'react-router-dom';
const RegisterUser = () => {
	const navigate = useNavigate();

	const [registeredUser, setRegisteredUser] = useState({});

	const [visible, setVisible] = useState(false);
	const [focusPlaceholderPassword, setFocusPlaceHolder] = useState('Password');
	const [focusPlaceholderUsername, setFocusPlaceholderUsername] =
		useState('Username');

	console.log(registeredUser);
	return (
		<div className={styles.registerUserContainer}>
			<div className={styles.modalContainer}>
				<h2>Create Account</h2>
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
				<form
					action=""
					// method="post"
					className={styles.registerFormContainer}
					onSubmit={(e) => {
						e.preventDefault();
						console.log(e.target.registeredUserName.value);
						setRegisteredUser({
							username: e.target.registeredUserName.value,
							password: e.target.registeredPassword.value,
						});

						navigate('/registerUser');
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
					<div className={styles.form_group}>
						<input
							type="submit"
							value="Submit"
							className={styles.registerButton}
						/>
					</div>
				</form>
			</div>
		</div>
	);
};
export default RegisterUser;
