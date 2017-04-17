;(function($){
	$("#main").drop({
		reloadPag:function(_this){
			$.ajax({
				url:"data/update.json",
				type:"get",
				dataType:"json",
				success:function(re){
					var sDow="";
					$.each(re.lists,function(i,ele){
						sDow+='<a href="#">'+
									'<img src="'+ele.pic+'" alt="">'+
									'<h3>'+ele.title+'</h3>'+
									'<span>'+ele.date+'</span>'+
								'</a>';
					})
					setTimeout(function(){
						_this.main.find(".all").html(sDow);
						_this.box
							.css("height",0)
							.on("webkitTransitionEnd",function(){
								this.remove();
								_this.have=false;
							})
					},2000)
				}
			})
		},
		loadPag:function(_this){
			$.ajax({
				url:"data/more.json",
				type:"get",
				dataType:"json",
				success:function(re){
					var sDow="";
					$.each(re.lists,function(i,ele){
						var lin=ele.link;
							sub=lin.charAt(1);
						if(i<2){
							sDow+='<a href="#">'+
									'<img src="'+ele.pic+'" alt="">'+
									'<h3>'+ele.title+'</h3>'+
									'<span>'+ele.date+'</span>'+
								'</a>';
						}
					})
					setTimeout(function(){
						_this.main.find(".all").append($(sDow));
						_this.box
							.css("height",0)
							.on("webkitTransitionEnd",function(){
								this.remove();
								_this.have=false;
							})
					},2000)
				}
			})
		}
	})
})(jQuery)