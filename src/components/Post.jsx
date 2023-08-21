/* eslint-disable react/prop-types */
import styles from './post.module.css';
import useDeletePost from '../hooks/useDelete';
import {useNavigate} from 'react-router-dom';
import {BiMessageSquareDetail} from 'react-icons/bi';

const Post = ({posts, userLoggedIn, username, token, setDeletedPost}) => {
	const {handleDelete} = useDeletePost(token, posts._id, setDeletedPost);
	const navigate = useNavigate();

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
						<button
							type="button"
							onClick={() => {
								navigate(`/${posts._id}/messages`, {
									state: {
										token: token,
										postId: posts._id,
										authorName: posts.author.username,
									},
								});
							}}
						>
							{' '}
							<BiMessageSquareDetail />
							Messages
						</button>

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
						<button
							type="button"
							onClick={() => {
								navigate(`/${posts._id}/directmessage`, {
									state: {
										username: posts.author.username,
										token: token,
										postId: posts._id,
									},
								});
							}}
						>
							<BiMessageSquareDetail />
							Direct Message
						</button>
					</div>
				)
			) : null}
		</section>
	);
};

export default Post;
