import React from 'react';
import './App.css';


import TaskList from './component/tasklist'
import { HashRouter, Switch} from 'react-router-dom';
import Login from './component/login'
import { Spin } from 'antd';
import AuthRouter from './router/authRoute'

// import Count from './component/count/index'


function App() {

  return (
    <div className="App">
      {/* <TaskList></TaskList> */}
      {/* <Login></Login> */}
      <HashRouter>
        <Switch>
         <AuthRouter/>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
