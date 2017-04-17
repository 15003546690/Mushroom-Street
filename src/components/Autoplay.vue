<!-- The ref attr used to find the swiper instance -->
<template>
	<div id="autoplay">
		<!-- Swiper -->
	    <div class="swiper-container autoP">
	        <div class="swiper-wrapper">
	            <div class="swiper-slide"  v-for='i in autoimg'><img :src="i.image" alt=""></div>
	        </div>
	        <!-- Add Pagination -->
	        <div class="swiper-pagination"></div>
	    </div>
	</div> 
</template>
<script>
	import '../lib/swiper/js/swiper.min.js'
	export default{
		name:'autoplay',
		data(){
			return {
				autoimg:[]
			}
		},
		mounted () {
		     
		     this.$http.jsonp('http://mce.mogucdn.com/jsonp/multiget/3?pids=36344%2C41161%2C41119%2C40298%2C4604',{
					}).then(function(data){
						 this.autoimg=data.data.data[36344].list
						//console.log(this.autoimg)
					});					
		},
		updated(){
			this.$nextTick(function(){
				var mySwiper = new Swiper('.autoP', {
			   	  direction: 'horizontal',
			   	  loop: true,
			   	  pagination: '.swiper-pagination',
			   	  autoplayDisableOnInteraction : false,
			   	  autoplay:1000
			   	});
			})
		}
	}
</script>
<style lang='scss' scoped>
	@import '../lib/swiper/css/swiper.min.css';
	#autoplay{
		height: auto;
		margin-top:44px;
		img{
			width: 100%;
		}
	}
</style>