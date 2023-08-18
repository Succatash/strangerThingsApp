/* eslint-disable react/prop-types */
import styles from './navbar.module.css';

import {useNavigate} from 'react-router-dom';

const Navbar = ({userLoggedIn, setUserLoggedIn}) => {
	// const [userRegistered, setUserRegistered] = useState(false);
	const navigate = useNavigate();

	return (
		<nav>
			<div className={`${styles.container} ${styles.nav}`}>
				<div
					className={styles.logo}
					onClick={() => {
						navigate('/');
					}}
				>
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
								navigate('/login');
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
							Register
						</button>
					</div>
				)}

				{userLoggedIn && (
					<div className={styles.buttonContainerLogOut}>
						<button
							type="button"
							value="Profile"
							className={styles.profile}
							onClick={() => {
								setUserLoggedIn(false);
								navigate('/profile');
							}}
						>
							Profile
						</button>

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
