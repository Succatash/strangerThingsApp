import styles from './createPost.module.css';
import {useComponentMount} from '../hooks/useComponentMount';

const Createpost = ({token}) => {
	const makePost = async () => {
		try {
			const response = await fetch(`${import.meta.env.VITE_BASE_URL}/posts`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify({
					post: {
						title: 'My favorite stuffed animal',
						description:
							'This is a pooh doll from 1973. It has been carefully taken care of since I first got it.',
						price: '$480.00',
						willDeliver: true,
					},
				}),
			});
			const result = await response.json();
			console.log(result);
			return result;
		} catch (err) {
			console.error(err);
		}
	};

	useComponentMount(makePost());
	return (
		//opaque backgroud
		<div className={styles.createPostContainer}>
			{/* //modal */}
			<div className={styles.modalContainer}>
				{/* form inside */}
				<form action="" className={styles.form}>
					<label htmlFor="title">Title</label>
					<input type="text" name="title" />

					<label htmlFor="description">Description</label>
					<textarea name="description" className={styles.textArea}></textarea>

					<label htmlFor="price">Price</label>
					<input type="text" name="price" />

					<label htmlFor="Location">location</label>
					<input type="text" name="location" />

					<label htmlFor="willdeliver">Will Deliver</label>
					<input type="radio" name="willdeliver" value="true" />

					<input type="submit" value="submit" />
				</form>
			</div>
		</div>
	);
};

export default Createpost;
