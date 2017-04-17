import Home from './components/Home.vue'
import Clas from './components/Clas.vue'
import Shop from './components/Shop.vue'
import Self from './components/Self.vue'
export default{
	routes:[
		{path:'/home',component:Home},
		{path:'/clas',component:Clas},
		{path:'/shop',component:Shop},
		{path:'/self',component:Self},
		{path:'/',redirect:'/home'}
	]
}