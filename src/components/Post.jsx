/* eslint-disable react/prop-types */
import styles from './post.module.css';
export default function Post({posts}) {
	return (
		<div className={styles.mainContainer} key={posts._id}>
			<section className={styles.postContainer}>
				<h1>{posts.title}</h1>
				<p>{posts.description}</p>
			</section>
		</div>
	);
}
