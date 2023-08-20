const useDeletePost = (token, postId, func) => {
	const handleDelete = async () => {
		try {
			const response = await fetch(
				`${import.meta.env.VITE_BASE_URL}/posts/${postId}`,
				{
					method: 'DELETE',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${token}`,
					},
				}
			);
			const result = await response.json();
			console.log(result, 'your post has been deleted');
			func(result.success);
		} catch (err) {
			console.error(err);
		}
	};
	return {handleDelete};
};

export default useDeletePost;
