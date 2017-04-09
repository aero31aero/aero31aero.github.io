var uiwriter = function(){
	var addPostTitle = function(post){
		var atr; //attribute container
		var li = document.createElement("li");
		var list = document.getElementById("post-title-list");
		li.innerHTML = post.title;
		atr = document.createAttribute("path");
		atr.value = post.path;
		li.setAttributeNode(atr);
		atr = document.createAttribute("id");
		atr.value = post.id;
		li.setAttributeNode(atr);
		list.appendChild(li);
	}
	var activatePostTitle = function(post){
		var li = document.getElementById(post.id);
		li.classList.add("active-title");
	}
	return {
		addPostTitle: addPostTitle,
		activatePostTitle: activatePostTitle,
	};
}()

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