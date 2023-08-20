import styles from './message.module.css';
import {BiMessageSquareDetail} from 'react-icons/bi';

export default function Message() {
	return (
		<div className={styles.container}>
			<div className={styles.modalContainer}>
				<BiMessageSquareDetail />
			</div>
		</div>
	);
}
