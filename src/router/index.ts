import TaskList from '../component/tasklist'
import Login from '../component/login'



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

];

export default RouterConfig;

