/* eslint-disable react/prop-types */
import styles from './home.module.css';
import {useEffect, useState} from 'react';
import Post from './Post';
// import {useNavigate} from 'react-router-dom';
import Createpost from './createPost';

const Home = ({userLoggedIn}) => {
	const [posts, setPosts] = useState([]);
	const [createPost, setCreatePost] = false;

	const fetchPosts = async () => {
		try {
			const response = await fetch(`${import.meta.env.VITE_BASE_URL}/posts`);
			const result = await response.json();
			console.log(result.data);
			setPosts(result.data.posts);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		fetchPosts();
	}, []);

	return (
		<div className={styles.mainContainer}>
			<div className={styles.titleAndCreatePost}>
				<div className={styles.title}>Posts</div>
				{userLoggedIn ? (
					<button
						className={styles.createPost}
						onClick={() => {
							setCreatePost(true);
						}}
					>
						Create Post
					</button>
				) : (
					<button style={{display: 'none'}}>Create Post</button>
				)}
			</div>
			<div className={styles.postContainer}>
				{posts.map((post) => {
					return <Post key={post._id} posts={post} />;
				})}
			</div>

			{/* //this is where i open the create post model */}
			{createPost && <Createpost />}
		</div>
	);
};
export default Home;
