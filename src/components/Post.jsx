/* eslint-disable react/prop-types */
import styles from './post.module.css';
import useDeletePost from '../hooks/useDelete';

const Post = ({posts, userLoggedIn, username, token, setDeletedPost}) => {
	const {handleDelete} = useDeletePost(token, posts._id, setDeletedPost);

	// const deletePost = async (postId, token) => {
	// 	try {
	// 		const response = await fetch(
	// 			`${import.meta.env.VITE_BASE_URL}/posts/${postId}`,
	// 			{
	// 				method: 'DELETE',
	// 				headers: {
	// 					'Content-Type': 'application/json',
	// 					Authorization: `Bearer ${token}`,
	// 				},
	// 			}
	// 		);
	// 		const result = await response.json();
	// 		console.log(result.success);
	// 		setDeletedPost(result.success);
	// 	} catch (err) {
	// 		console.error(err);
	// 	}
	// };

	return (
		<section className={styles.postContainer}>
			<h1 style={{color: 'black'}}>{posts.title}</h1>
			<p style={{color: 'black'}}>{posts.description}</p>
			<div style={{color: 'black', fontWeight: 'bold'}}>{posts.price}</div>
			{posts.willDeliver ? (
				<p style={{color: 'black'}}>Will Deliver: Yes</p>
			) : (
				<p style={{color: 'black'}}>
					Will Deliver: No, please pick up the item
				</p>
			)}
			<p style={{color: 'black'}}>Seller: {posts.author.username}</p>

			{userLoggedIn ? (
				username ? (
					<div className={styles.buttonContainer}>
						<button>Messages</button>
						<button
							type="button"
							className={styles.deleteButton}
							onClick={handleDelete}
						>
							Delete
						</button>
					</div>
				) : (
					<div className={styles.buttonContainer}>
						<button type="button">Direct Message</button>
					</div>
				)
			) : null}
		</section>
	);
};

export default Post;
