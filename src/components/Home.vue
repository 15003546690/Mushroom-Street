<template>
	<div id="home">
		<headerView></headerView>	
		<!-- <div v-iscroll="iscrollConf" style="height: 100%;overflow: hidden;">	
			<div class="aaa"> -->
				<autoplay></autoplay>
				<div class="daily-new">
					<div v-for='i in dailyDate'>
						<h3>{{i.title}}</h3>
						<p>{{i.description}}</p>
						<h4>
							<img src="https://s2.mogucdn.com/mlcdn/c45406/170406_7c14g0419g4958882llc8f1j5b94f_200x200.jpg_200x9999.v1c7E.70.webp" alt="">
						</h4>
					</div>
				</div>
				<div class="panic-buying">
					<h3>09点快抢·据结束 00:00:00 <span class='fa fa-angle-right'></span></h3>
					<div class="daily-new-bar">
						<div class="home-continer">
					        <div class="swiper-wrapper">
					            <div class="swiper-slide slide-right">
									<div>
										<img src="http://s2.mogucdn.com/p2/170327/upload_5g098l78a77kj1bkg58d85kc6gkj4_640x640.jpg_320x999.webp" alt="">
										<p>【鞋底上线】软底流苏凉鞋</p>
										<p><span>￥39.00</span> <del>￥99.00</del></p>
									</div>
					            </div>
					            <div class="swiper-slide slide-right">
									<div>
										<img src="http://s2.mogucdn.com/p2/170321/upload_4g1c4adjecgedjc7d6khbaid338j8_640x640.jpg_320x999.webp" alt="">
										<p>【鞋底上线】软底流苏凉鞋</p>
										<p><span>￥39.00</span> <del>￥99.00</del></p>
									</div>
					            </div>
					            <div class="swiper-slide slide-right">
									<div>
										<img src="http://s2.mogucdn.com/mlcdn/1689c6/170404_2jjk2654db4l50d46bh6alei433lk_640x640.jpg_320x999.webp" alt="">
										<p>【鞋底上线】软底流苏凉鞋</p>
										<p><span>￥39.00</span> <del>￥99.00</del></p>
									</div>
					            </div>
					            <div class="swiper-slide slide-right">
									<div>
										<img src="http://s2.mogucdn.com/p2/170327/upload_86ajaa8044f02jach5a9l8h18l91l_640x640.jpg_320x999.webp" alt="">
										<p>【鞋底上线】软底流苏凉鞋</p>
										<p><span>￥39.00</span> <del>￥99.00</del></p>
									</div>
					            </div>
					        </div>
					    </div>
					</div>		
				</div>
				<div class="sell">
					<h2>人气热销</h2>
					<div class="sell-template">
						<div  v-for='i in sellDate'>
							<h3>{{i.title}}</h3>
							<p>{{i.viceTitle}}</p>
							<h4>
								<img :src='i.image' alt="">
							</h4>						
						</div>
					</div>

				</div>
				<div class="choiceness">
					<h2>精选专题<span class="fa fa-angle-right"></span></h2>
					<div class="choiceness-img">
						<img src="https://s10.mogucdn.com/mlcdn/c45406/170329_3b5ejg78e526f9d7hg45abcj4h722_750x316.jpg_640x999.jpg" alt="">
						<span></span>
					</div>
					<div class="choiceness-bar">
						<div class="choiceness-continer">
					        <div class="swiper-wrapper">
					            <div class="swiper-slide slide-right">
									<div>
										<img src="http://s2.mogucdn.com/p2/170319/121584335_2kcg33jk2k3d813f5lf73kb9keb2h_640x960.jpg_185x185.jpg" alt="">
										<p><span>￥39.00</span></p>
									</div>
					            </div>
					            <div class="swiper-slide slide-right">
									<div>
										<img src="http://s2.mogucdn.com/mlcdn/c45406/170404_7fagk4k45l30e9ilcbe86211fiek2_468x702.jpg_185x185.jpg" alt="">
										<p><span>￥39.00</span></p>
									</div>
					            </div>
					            <div class="swiper-slide slide-right">
									<div>
										<img src="http://s2.mogucdn.com/p2/170319/121584335_2kcg33jk2k3d813f5lf73kb9keb2h_640x960.jpg_185x185.jpg" alt="">
										<p><span>￥39.00</span></p>
									</div>
					            </div>
					            <div class="swiper-slide slide-right">
									<div>
										<img src="http://s2.mogucdn.com/mlcdn/c45406/170404_7fagk4k45l30e9ilcbe86211fiek2_468x702.jpg_185x185.jpg" alt="">
										<p><span>￥39.00</span></p>
									</div>
					            </div>
					            <div class="swiper-slide slide-right">
									<div>
										<img src="http://s2.mogucdn.com/mlcdn/c45406/170331_128c10244ege64j03kbfde1lja67i_640x960.png_185x185.jpg" alt="">
										<p><span>￥39.00</span></p>
									</div>
					            </div>
					            <div class="swiper-slide slide-right">
									<div>
										<img src="http://s2.mogucdn.com/p2/170303/23314200_38k2cd5adh4hc0c652d8haj6e2aic_640x960.jpg_185x185.jpg" alt="">
										<p><span>￥39.00</span></p>
									</div>
					            </div>
					        </div>
					    </div>
					</div>	
					<div class="choiceness-img">
						<img src="https://s10.mogucdn.com/mlcdn/c45406/170403_758512lef94k0l35c868a102ciia9_750x376.jpg_640x999.jpg" alt="">
						<span></span>
					</div>
					<div class="choiceness-bar">
						<div class="choiceness-continer">
					        <div class="swiper-wrapper">
					            <div class="swiper-slide slide-right">
									<div>
										<img src="http://s2.mogucdn.com/p2/170319/121584335_2kcg33jk2k3d813f5lf73kb9keb2h_640x960.jpg_185x185.jpg" alt="">
										<p><span>￥39.00</span></p>
									</div>
					            </div>
					            <div class="swiper-slide slide-right">
									<div>
										<img src="http://s2.mogucdn.com/mlcdn/c45406/170404_7fagk4k45l30e9ilcbe86211fiek2_468x702.jpg_185x185.jpg" alt="">
										<p><span>￥39.00</span></p>
									</div>
					            </div>
					            <div class="swiper-slide slide-right">
									<div>
										<img src="http://s2.mogucdn.com/mlcdn/c45406/170331_128c10244ege64j03kbfde1lja67i_640x960.png_185x185.jpg" alt="">
										<p><span>￥39.00</span></p>
									</div>
					            </div>
					            <div class="swiper-slide slide-right">
									<div>
										<img src="http://s2.mogucdn.com/p2/170303/23314200_38k2cd5adh4hc0c652d8haj6e2aic_640x960.jpg_185x185.jpg" alt="">
										<p><span>￥39.00</span></p>
									</div>
					            </div>
					        </div>
					    </div>
					</div>	
				</div>
				<div class="guess-you-like">
					<h2>一·猜你喜欢·一</h2>
					<div class="guess-box"  v-for='i in guessDate'>
						<div class="guess-box-img">
							<img :src="i.img" alt="">
						</div>
						<div class="guess-box-msg">
							<span v-for='k in i.props'>{{k}}</span>
						</div>
						<div class="guess-box-price">
							<p>￥{{i.orgPrice}}</p>
							<p>47382</p>
						</div>
					</div>
				</div>
		<!-- 	</div>	
		</div> -->	
	</div>
</template>
<script>
	import headerView from './Header.vue';
	import autoplay from './Autoplay.vue';
	import '../lib/swiper/js/swiper.min.js'
	export default{
		components:{
			headerView,
			autoplay
		},
		data() {
	        return {
	            iscrollConf: {
	                bounce: true,
	            },
	            guessDate:[],
	            sellDate:[],
	            dailyDate:[]
	        }
	    },
		mounted () {
		     var swiper = new Swiper('.home-continer', {
		             slidesPerView: 3,
		             paginationClickable: true,
		             // spaceBetween: 30,
		             freeMode: true
		         });
		     var swiper = new Swiper('.choiceness-continer', {
		             slidesPerView: 4,
		             paginationClickable: true,
		             spaceBetween: 30,
		             freeMode: true
		         });
		     //请求猜你喜欢数据
		     this.$http.jsonp('https://list.mogujie.com/search?cKey=h5-shopping&fcid=&pid=9750&searchTag=&sort=pop&page=1&_version=61&_=1491806514220',{
					}).then(function(data){		
						 this.guessDate=data.data.result.wall.docs
					})	
			//请求人气热销数据	
		     this.$http.jsonp('http://mce.mogucdn.com/jsonp/multiget/3?pids=36344%2C41161%2C41119%2C40298%2C4604',{
					}).then(function(data){
						 this.sellDate=data.data.data[40298].list
					});	
			//请求daily-new	
			this.$http.jsonp('http://mce.mogucdn.com/jsonp/multiget/3?pids=36344%2C41161%2C41119%2C40298%2C4604',{
					}).then(function(data){
						 console.log(data.data.data)
						 this.dailyDate=data.data.data[41161].list
					});	
		}
		
	}
</script>
<style lang='scss' scoped>
	@import '../lib/swiper/css/swiper.min.css';
	 .aaa{
		/* position: absolute;  */
		width: 100%;
		margin-bottom: 100px;
		/* ¿ØÖÆiscroll */
		/* height: 1px; */
	} 
	#home{
	  overflow: hidden;
	  margin-bottom: 50px;
	}
	.daily-new{
		width: 100%;
		height: 100px;
		display: flex;
		background: #fff;
		div{
			flex: 1;
			margin-top: 10px;
			text-align: center;
			margin-bottom: 10px;
			p{
				color: #999;
			}
			h4{
				width: 100px;
				margin:0 auto;
				img{
					display: block;
					width: 50%;
					text-align: center;
					margin:0 auto;
				}
			}
			
		}
		div:first-child{
			border-right: 1px solid #ccc;
		}
		div:last-child{
			border-left: 1px solid #ccc;
		}
	}
	.panic-buying{
		width: 100%;
		height: 180px;
		background: #fff;
		margin-top: 10px;
		h3{
			line-height: 35px;
			padding: 0 15px;
			span{
				display: inline-block;
				line-height: 35px;
				float: right;
				color: #ccc;
				font-size: 18px;
			}
		}
		.daily-new-bar{
			padding-left: 15px;
			height: 140px;
			.slide-right{
				div{
					width: 100px;
					img{
						width: 100%;
					}
				}
			}
			
			p{
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			p:last-child{
					span{
						color:#ff2255;
					}
				}
		}
	}
	.sell{
		width: 100%;
		background: #fff;
		margin-top: 10px;
		h2{
			line-height: 40px;
			padding-left: 10px;
		}
		.sell-template{
			width: 100%;
			border-top: 1px solid #ccc;
			height: 370px;
			border-bottom: solid 1px #ccc;
			div{
				overflow: hidden;
			}
			div:nth-child(1){
				width: 40%;
 				height: 153px; 
				border-right: 1px solid #ccc;
				float: left;
				padding-top: 32px;
    			border-bottom: solid 1px #ccc;
				h3{
					text-align: center;
					font-size: 14px;
					font-weight: bold;
				}
				p{
					text-align: center;
					color: #B800EE
				}
				h4{
					width: 100px;
					margin: 0 auto;
					
					img{
						width: 100%;
					}
				}
			}
			div:nth-child(2){
				width: 59%;
				float: right;
				height: 92px;
				border-bottom: solid 1px #ccc;
				position: relative;
				h3{
					margin-top: 10px;
					line-height: 28px;
					padding-left: 10%;
				}
				p{
					line-height: 28px;
					padding-left: 10%;
				}
				h4{
					width: 65px;
					float: right;
					position: absolute;
					right: 10%;
				    bottom: 8%;
					img{
						width: 100%;
					}
				}
			}
			 div:nth-child(3){
				width: 59%;
				float: right;
				height: 92px;
				border-bottom: solid 1px #ccc;
				position: relative;
				h3{
					margin-top: 10px;
					line-height: 28px;
					padding-left: 10%;
				}
				p{
					line-height: 28px;
					padding-left: 10%;
				}
				h4{
					width: 60px;
					float: right;
					position: absolute;
					right: 10%;
				    bottom: 8%;
					img{
						width: 100%;
					}
				}
			} 
			div:nth-child(4){
				width: 40%;
 				height: 153px; 
				border-right: 1px solid #ccc;
				float: left;
				padding-top: 30px;
				
				h3{
					text-align: center;
					font-size: 14px;
					font-weight: bold;
				}
				p{
					text-align: center;
					color: #B800EE
				}
				h4{
					width: 100px;
					margin: 0 auto;
					
					img{
						width: 100%;
					}
				}
			}
			div:nth-child(5){
				width: 59%;
				float: right;
				height: 92px;
				border-bottom: solid 1px #ccc;
				position: relative;
				h3{
					margin-top: 10px;
					line-height: 28px;
					padding-left: 10%;
				}
				p{
					line-height: 28px;
					padding-left: 10%;
				}
				h4{
					width: 65px;
					float: right;
					position: absolute;
					right: 10%;
				    bottom: 8%;
					img{
						width: 100%;
					}
				}
			}
			 div:nth-child(6){
				width: 59%;
				float: right;
				height: 92px;
				position: relative;
				h3{
					margin-top: 10px;
					line-height: 28px;
					padding-left: 10%;
				}
				p{
					line-height: 28px;
					padding-left: 10%;
				}
				h4{
					width: 65px;
					float: right;
					position: absolute;
					right: 10%;
				    bottom: 8%;
					img{
						width: 100%;
					}
				}
			} 
		}
	}
	.choiceness{
		width: 100%;
		margin-top: 10px;
		background: #fff;
		h2{
			line-height: 40px;
			padding:0 10px;
			span{
				display: inline-block;
				line-height: 35px;
				float: right;
				color: #ccc;
				font-size: 18px;
			}
		}
		.choiceness-img{
			padding: 0 10px;
			position: relative;
			overflow: hidden;
			img{
				width: 100%;
			}
			span{
				display: inline-block;
				width: 20px;
				height: 20px;
				background: #fff;
				text-align: center;
				transform: rotate(45deg);
				position: absolute;
				bottom: -11px;
				left: 50%;
			}		
		}
		.choiceness-bar{
			height: auto;
			margin-top: 20px;
			padding:0 10px;
			.slide-right{
				div{
					img{
						width: 100%;
					}
				}
			}			
		}
	}
	.guess-you-like{
		width: 100%;
		display:flex;
		flex-wrap:wrap;
		justify-content: space-around;
		h2{
			line-height: 40px;
			width:100%;
			text-align: center;
		}
		.guess-box{
			height: auto;
			padding-top:10px;
			width: 48%;
			background: #fff;
			overflow: hidden;
			margin-bottom:10px;
			.guess-box-img{
				width: 100%;
				margin: 0 auto;
				img{
					display: block;
					margin: 0 auto;
					width: 100%;
				}
			}
			.guess-box-msg{
				padding: 0 15px;
				height: 60px;
				span{
					display: inline-block;
					margin: 0 3px;
					border-radius: 4px;
				    height: 18px;
				    line-height: 18px;
				    background: #eff3f6;
				    color: #5a6f7a;
				}
			}
			.guess-box-price{
				width: 100%;
				padding: 0 15px;
				box-sizing: border-box;
				height: 20px;
				line-height: 20px;
				p:first-child{
					float:left;
					font-weight: bold;
				}
				P:last-child{
					float: right;
				}
			}
		}
		
	}
</style>