<template>
  <div id="box">
    <router-view></router-view>
    <footer id="footer">
      <a href="javascript:;">
        <i><img src="https://s2.mogucdn.com/p2/170315/40592144_5a62k5aecifecf3iaddc0eb2l384b_44x44.png" alt=""></i>
        <span><router-link to='/home'>首页</router-link></span>
      </a>
      <a href="javascript:;">
        <i><img src="https://s2.mogucdn.com/p2/170315/40592144_0b8i11l822b0adfjaaifl11ig86f1_44x44.png" alt=""></i>
        <span><router-link to='/clas'>分类</router-link></span>
      </a>
      <a href="javascript:;">
        <i><img src="https://s2.mogucdn.com/p2/170315/40592144_67ja8jj102089fj6djai0l6khb0h5_44x44.png" alt=""></i>
        <span><router-link to='/shop'>购物车</router-link></span>
      </a>
      <a href="javascript:;">
        <i><img src="https://s2.mogucdn.com/p2/170315/40592144_35ikl8db8a4lfa3f29k8k4b9k3ji2_44x44.png" alt=""></i>
        <span><router-link to='/self'>我的</router-link></span>
      </a>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcoffme'
    }
  },
  components:{
    
  }
}
</script>

<style lang="scss" scoped>
  
  html,body{
    width: 100%;
    height: 100%;
  }
  #box{
    background: #eee;
    width: 100%;
  }
  #footer{
  width:100%;
  padding-top:5px;
  position:fixed;
  z-index: 2;
  bottom:0px;
  background:#fff;
  border-top:1px solid #ccc;
  height:44px;
  display:-webkit-box;
  text-align:center;
  a{
    display:block;
    -webkit-box-flex:1;
    span{
      display: inline-block;
      margin-top: 3px;
      a{
        color: #000;
        text-decoration: none;
      }
    }
    i{
      margin:0 auto;
      display:block;
      width:20px;
      height:20px;
      img{
        width:100%;
        height:100%;
        }
      }
    }
  }
  .router-link-active{
    color: pink !important
  }
</style>
