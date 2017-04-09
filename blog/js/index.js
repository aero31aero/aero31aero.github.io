var main = function(){
	loader.init("/src/blog");
	loader.getPostsJson(function(err,posts){
		if(err){
			return console.log("Error thrown by loader.getPostsJson.");
		}
		posts.forEach(function(post){
			interface.addPostTitleInList(post);
		})
		interface.activatePostTitleInList(posts[0]);
		interface.updatePostTitleInHeader(posts[0]);
		loader.getPost(posts[0],function(err,rawpost){
			if(err){
				return console.log("Error thrown by loader.getPost.");
			}
			interface.renderPost(posts[0],rawpost);
		})
	});
	// interface.addPostTitleInList(post1);
	// interface.addPostTitleInList(post2);
	// interface.activatePostTitleInList(post2);
	// interface.updatePostTitleInHeader(post1);
}

main();