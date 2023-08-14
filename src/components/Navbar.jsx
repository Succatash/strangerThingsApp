import styles from './navbar.module.css';

import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Navbar = () => {
	const [userLoggedIn, setUserLoggedIn] = useState(false);
	const navigate = useNavigate();

	console.log(userLoggedIn);
	return (
		<nav>
			<div className={`${styles.container} ${styles.nav}`}>
				<div className={styles.logo}>
					<span>Stranger</span>
					<span>things</span>
				</div>

				<div className={styles.searchContainer}>
					<input type="search" placeholder="Search stuff here" />

					<div className={styles.iconContainer}>
						<i
							className={`${styles.icon} fa-solid fa-magnifying-glass fa-xl`}
						></i>
					</div>
				</div>

				{!userLoggedIn && (
					<div className={styles.buttonContainer}>
						<button
							type="button"
							value="Login"
							className={styles.login}
							onClick={() => {
								setUserLoggedIn(true);
							}}
						>
							Login
						</button>

						<button
							type="button"
							value="register"
							className={styles.register}
							onClick={() => {
								navigate('/registerUser');
							}}
						>
							Register User
						</button>
					</div>
				)}

				{userLoggedIn && (
					<div className={styles.buttonContainerLogOut}>
						<p>Welcome User</p>
						<button
							type="button"
							value="Log Out"
							className={styles.logOut}
							onClick={() => {
								setUserLoggedIn(false);
								navigate('/');
							}}
						>
							Log Out
						</button>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
