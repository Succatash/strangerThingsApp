const useDeletePost = (token, postId, func) => {
	const handleDelete = async () => {
		try {
			const response = await fetch(
				`${'https://strangers-things.herokuapp.com/api/2302-ACC-ET-WEB-PT-E'}/posts/${postId}`,
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
