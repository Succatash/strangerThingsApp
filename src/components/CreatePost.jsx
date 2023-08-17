import styles from './createPost.module.css';

const Createpost = () => {
	return (
		//opaque backgroud
		<div className={styles.createPostContainer}>
			{/* //modal */}
			<div className={styles.modalContainer}>
				{/* form inside */}
				create Posts here
			</div>
		</div>
	);
};

export default Createpost;
