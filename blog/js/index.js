var main = function(){
	var post1 = {
		id: "title-1",
		title: "How I Wrote My Blog",
		path: "how-i-wrote-my-blog",
	}
	var post2 = {
		id: "title-2",
		title: "Working For Zulip",
		path: "working-for-zulip",
	}
	uiwriter.addPostTitle(post1);
	uiwriter.addPostTitle(post2);
	uiwriter.activatePostTitle(post1);
}

main();