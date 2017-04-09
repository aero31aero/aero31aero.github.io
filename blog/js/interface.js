var interface = function(){
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
}();