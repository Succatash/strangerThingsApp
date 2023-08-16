/* eslint-disable react/prop-types */
import styles from './main.module.css';
import {useEffect, useState} from 'react';
import Post from './Post';

// possible props i may need
// {token, userLoggedIn}

const Main = () => {
	const [posts, setPosts] = useState([]);

	const fetchPosts = async () => {
		try {
			const response = await fetch(`${import.meta.env.VITE_BASE_URL}/posts`);
			const result = await response.json();
			console.log(result);
			setPosts(result.data.posts);
		} catch (err) {
			console.error(err);
		}
	};

	useEffect(() => {
		fetchPosts();
	}, []);

	return (
		<div className={styles.container}>
			{posts.map((post) => {
				return <Post key={post._id} posts={post} />;
			})}
		</div>
	);
};
export default Main;
