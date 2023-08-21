import styles from './message.module.css';
import {useNavigate, useLocation} from 'react-router-dom';
import {IoCloseSharp} from 'react-icons/io5';
import {useState, useEffect} from 'react';

export default function Message() {
	let navigate = useNavigate();
	let location = useLocation();

	const [messages, setMessages] = useState([]);

	useEffect(() => {
		const myData = async () => {
			try {
				const response = await fetch(
					`${import.meta.env.VITE_BASE_URL}/users/me`,
					{
						headers: {
							'Content-Type': 'application/json',
							Authorization: `Bearer ${location.state.token}`,
						},
					}
				);
				const result = await response.json();
				console.log(location.state.postId);
				console.log(result.data.messages);
				setMessages(result.data.messages);
			} catch (err) {
				console.error(err);
			}
		};
		myData();
	}, [location.state.token, location.state.postId]);

	return (
		<div className={styles.messageContainer}>
			<div className={styles.modalContainer}>
				<IoCloseSharp
					onClick={() => {
						navigate('/');
					}}
				/>

				{messages
					.filter((el) => {
						return el.post._id === location.state.postId;
					})
					.map((msg) => {
						return <div key={msg._id}>{msg.content}</div>;
					})}
			</div>
		</div>
	);
}
