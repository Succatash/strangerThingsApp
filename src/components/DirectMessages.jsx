import styles from './directMessage.module.css';
import {useNavigate, useLocation} from 'react-router-dom';
import {IoCloseSharp} from 'react-icons/io5';
// import {useState} from 'react';

const DirectMessage = () => {
	let navigate = useNavigate();
	let location = useLocation();
	// const [success, setSuccess] = useState('');

	console.log(location.state.postId, location.state.token);

	const postMessage = async (content) => {
		try {
			const response = await fetch(
				`${import.meta.env.VITE_BASE_URL}/posts/${
					location.state.postId
				}/messages`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${location.state.token}`,
					},
					body: JSON.stringify({
						message: {
							content: content,
						},
					}),
				}
			);
			const result = await response.json();
			console.log(result);
			if (result.success) {
				console.log('worked', result);

				// TODO:currently it redirects to home page, decide if you wanat to display a success message on home page or somewhere else.

				navigate('/');
			}
			// return result;
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div className={styles.messageContainer}>
			<div className={styles.modalContainer}>
				<IoCloseSharp
					className={styles.icon}
					onClick={() => {
						navigate('/');
					}}
				/>
				<h3
					className={styles.title}
				>{`Direct Message:  ${location.state.username}`}</h3>
				<form
					action=""
					method="post"
					style={{display: 'flex', flexDirection: 'column'}}
					onSubmit={(e) => {
						e.preventDefault();
						postMessage(e.target.message.value);
					}}
				>
					<textarea
						className={styles.messagebox}
						name="message"
						placeholder="Direct message the owner for any questions"
					></textarea>
					<input type="submit" value="submit" className={styles.submitButton} />
				</form>
			</div>
		</div>
	);
};

export default DirectMessage;
