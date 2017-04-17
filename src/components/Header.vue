<template>
	<header class="header-bar">
		<div class="icon-group left-icont-group">
			<a href="#" class="back-icon fa fa-github-alt"></a>
		</div>
		<h2 class="title">蘑菇街</h2>
		<div class="icon-group right-icont-group">
			<a href="#" class="go-icon fa fa-shopping-cart"></a>
		</div>
	</header>
</template>
<script>
	export default {
		 name:'headerView'
	}
</script>
<style lang="scss"  scoped>
	.header-bar{
		width:100%;
		height:44px;
		background:#fff;
		position:fixed;
		z-index: 2;
		border-bottom: solid 1px #999;
		.title{
			position:absolute;
			left:0;
			right:0;
			line-height:44px;
			text-align:center;
			font-weight:normal;
			font-size:16px;
		}
		.icon-group{
			height:44px;
			padding:0 5px;
			display:-webkit-box;
			-webkit-box-align:center;
			&.left-icont-group{
				float:left;
				
			}
			&.right-icont-group{
				float:right;
			}
			.back-icon{
				width: 30px;
				height: 30px;
				font-size: 20px;
				color: #000;
				display:block;
				text-align: center;
				line-height: 30px;
			}
			.go-icon{
				width: 30px;
				height: 30px;
				font-size: 20px;
				color: #000;
				display:block;
				text-align: center;
				line-height: 30px;
			}
		}
		.icon{
			display:inline-block;
			width:27px;
			height:27px;
			margin:0 5px;
			&.back-icon{
			background-size:100%;
			}
		}
	}
</style>