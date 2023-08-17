/* eslint-disable react/prop-types */
import styles from './post.module.css';

export default function Post({posts}) {
	return (
		<section
			className={styles.postContainer}
			// onClick={}
		>
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
		</section>
	);
}
