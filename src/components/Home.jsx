/* eslint-disable react/prop-types */
import styles from './home.module.css';
import {useEffect, useState} from 'react';
import Post from './Post';
import {useNavigate, Outlet, useLocation} from 'react-router-dom';

const Home = ({userLoggedIn, username, token}) => {
	const [posts, setPosts] = useState([]);
	const [deletedPost, setDeletedPost] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();

	const fetchPosts = async () => {
		try {
			const response = await fetch(`${import.meta.env.VITE_BASE_URL}/posts`);
			const result = await response.json();
			console.log(result.data.posts);
			setPosts(result.data.posts);
			setDeletedPost(false);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		fetchPosts();
	}, [location, deletedPost]);

	return (
		<main className={styles.mainContainer}>
			<div className={styles.titleAndCreatePost}>
				<div className={styles.title}>Posts</div>

				{userLoggedIn ? (
					<button
						className={styles.createPost}
						onClick={() => {
							navigate('/makepost');
						}}
					>
						Create Post
					</button>
				) : (
					<button style={{display: 'none'}}>Create Post</button>
				)}

				<Outlet />
			</div>
			<div className={styles.postContainer}>
				{posts.map((post) => {
					if (post.author.username === username) {
						return (
							<Post
								key={post._id}
								posts={post}
								username={username}
								userLoggedIn={userLoggedIn}
								token={token}
								setDeletedPost={setDeletedPost}
							/>
						);
					} else {
						return (
							<Post
								key={post._id}
								posts={post}
								userLoggedIn={userLoggedIn}
								token={token}
							/>
						);
					}
				})}
			</div>
		</main>
	);
};
export default Home;
