import TaskList from '../component/tasklist'
import Login from '../component/login'
import Home from '../pages/home'



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
    auth: false
  },

];

export default RouterConfig;

