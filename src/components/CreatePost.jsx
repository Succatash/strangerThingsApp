/* eslint-disable react/prop-types */
import styles from './createPost.module.css';
import {useNavigate} from 'react-router-dom';
import {IoCloseSharp} from 'react-icons/io5';

const CreatePost = ({token}) => {
	const navigate = useNavigate();

	const makePost = async (post) => {
		try {
			const response = await fetch(
				`${'https://strangers-things.herokuapp.com/api/2302-ACC-ET-WEB-PT-E'}/posts`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${token}`,
					},
					body: JSON.stringify({
						post: post,
					}),
				}
			);

			const result = await response.json();
			if (result.success) {
				navigate('/');
			}
		} catch (err) {
			console.error(err);
		}
	};

	// useEffect(() => {
	// 	makePost(post);
	// }, [post]);

	return (
		<div className={styles.createPostContainer}>
			{/* //modal */}
			<div className={styles.modalContainer}>
				{/* form inside */}
				<IoCloseSharp
					onClick={() => {
						navigate('/');
					}}
					className={styles.xicon}
				/>
				<form
					action=""
					className={styles.form}
					id="form"
					onSubmit={(e) => {
						e.preventDefault();
						makePost({
							title: e.target.title.value,
							description: e.target.description.value,
							price: e.target.price.value,
							location: e.target.price.value,
							willdeliver: e.target.price.checked,
						});
					}}
					method="post"
				>
					<label htmlFor="title">Title</label>
					<input type="text" name="title" className={styles.input} />
					<label htmlFor="description">Description</label>
					<textarea name="description" className={styles.textArea}></textarea>
					<label htmlFor="price">Price</label>
					<input type="text" name="price" className={styles.input} />
					<label htmlFor="location">location</label>
					<input type="text" name="location" className={styles.input} />

					{/* TODO:fix this so it shows checkmark when clicked */}
					<label htmlFor="willdeliver" className={styles.willDeliverLabel}>
						Will Deliver
					</label>
					{/* <BsCheckLg
								className={styles.checkmark}
								onClick={() => {
									setChecked(false);
								}}
							/> */}
					<input
						type="radio"
						name="willdeliver"
						value="true"
						className={styles.checked}
					/>
					<input type="submit" value="submit" className={styles.input} />
				</form>
			</div>
		</div>
	);
};

export default CreatePost;
