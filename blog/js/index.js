var main = function(){
	var post1 = {
		id: "title-1",
		title: "How I Wrote My Blog",
		path: "how-i-wrote-my-blog",
		date: "27-10-2016",
	}
	var post2 = {
		id: "title-2",
		title: "Working For Zulip",
		path: "working-for-zulip",
	}
	interface.addPostTitle(post1);
	interface.addPostTitle(post2);
	interface.activatePostTitle(post2);
	interface.updatePostTitleInHeader(post1);
}

main();