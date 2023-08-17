import styles from './createPost.module.css';

const Createpost = () => {
	return (
		//opaque backgroud
		<div className={styles.createPostContainer}>
			{/* //modal */}
			<div className={styles.modalContainer}>
				{/* form inside */}
				<form action="" className={styles.form}>
					<label htmlFor="title">Title</label>
					<input type="text" name="title" />
					<input type="submit" value="submit" />
				</form>
			</div>
		</div>
	);
};

export default Createpost;
