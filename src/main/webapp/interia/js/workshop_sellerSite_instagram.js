var userFeed = new Instafeed({
	get:'user',
	userId:8381379911,
	sortBy:"most-recent",
	limit:1,
	resolution: "standard_resolution",
	template:'<a href="{{link}}" target="_blank"><img width="280" height="410" src="{{image}}"/></a>',
	//template:'<a href="'+post.link+'" target="_blank"><img width="280" height="410" src="'+highResThumb+'"/></a>',
	accessToken:'8381379911.9b6191c.e1dc79d1328341fc88cba748e711b1ea'
		/* success: function(images) {
	        $.each(images.data, function(imageID, post) {
	          console.table(post);  // 이렇게 콘솔에 찍어서 받아오는 post 
	          var highResThumb = post.images.thumbnail.url.replace('s150x150/', 's640x640/');
	          console.log(highResThumb);
	          $('#instafeed').append('<a href="'+post.link+'" class="standard_resolution" target="_blank"><img class="instaFeed" src="'+highResThumb+'"/></a>');
	        });
	    } */
});
userFeed.run();