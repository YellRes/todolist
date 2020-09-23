import TaskList from '../component/tasklist'
import Login from '../component/login'
import Home from '../pages/home'
import Test  from '../pages/test'
import Counter from '../pages/test/classAdd'



const RouterConfig = [
  
  {
    path: "/login",
    component: Login,
    auth: false
  },
  {
    path: "/taskList",
    component: TaskList,
    auth: true
  },
  {
    path: "/home",
    component: Home,
    auth: true
  },
  {
    path: "/test",
    component: Test,
    auth: false
  },
  {
    path: "/counter",
    component: Counter,
    auth: false
  },
  

];

export default RouterConfig;

