var interface = function(){
	var addPostTitle = function(post){
		var li = document.createElement("li");
		var list = document.getElementById("post-title-list");
		li.innerHTML = post.title;
		li.setAttribute("path",post.path);
		li.setAttribute("id",post.id);
		list.appendChild(li);
	}
	var activatePostTitle = function(post){
		var li = document.getElementById(post.id);
		li.classList.add("active-title");
	}
	var updatePostTitleInHeader = function(post){
		var date = {};
		date.year = post.date.split("-")[2];
		date.month = post.date.split("-")[1];
		date.day = post.date.split("-")[0];
		var title = "~/";
		title += date.year + "/";
		title += date.month + "/";
		title += date.day + "/";
		title += post.path;
		var titleholder = document.getElementById("post-title");
		titleholder.innerHTML = title;
	}
	return {
		addPostTitle: addPostTitle,
		activatePostTitle: activatePostTitle,
		updatePostTitleInHeader: updatePostTitleInHeader,
	};
}();