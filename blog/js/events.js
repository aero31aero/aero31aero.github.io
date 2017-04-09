var events = function(){
	var state = {
	};

	var init = function(){
	};

	var setPostTitleClickEventHandler = function(callback){
		var list = document.getElementById("post-title-list");
		var lis = Array.prototype.slice.call(list.children);
		lis.forEach(function(li){
			li.addEventListener("click",callback);
		})
	}
	return {
		init: init,
		setPostTitleClickEventHandler: setPostTitleClickEventHandler,
	};
}();