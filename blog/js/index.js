var main = function(){
	var state = {};

	var loadPost = function(post){
		interface.activatePostTitleInList(post);
		interface.updatePostTitleInHeader(post);
		loader.getPost(post,function(err,rawpost){
			if(err){
				return console.log("Error thrown by loader.getPost.");
			}
			interface.renderPost(post,rawpost);
		})
	};

	var begin = function(){
		loader.init("/src/blog");
		loader.getPostsJson(function(err,posts){
			if(err){
				return console.log("Error thrown by loader.getPostsJson.");
			}
			posts.forEach(function(post){
				interface.addPostTitleInList(post);
			});
			loadPost(posts[0]);
			events.setPostTitleClickEventHandler(function(elem){
				console.log("Clicked.");
				console.log(elem);
				posts.forEach(function(post){
					if(post.path === elem.target.id){
						return loadPost(post);
					}
				});
			});
		});
	};
	return begin;
}();

main();