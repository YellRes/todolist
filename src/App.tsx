import React from 'react';
import './App.css';


import TaskList from './component/tasklist'
// import { BrowserRouter, Route } from 'react-router-dom';
import Login from './component/login'
import { Spin } from 'antd';

// import Count from './component/count/index'


function App() {
  return (
    <div className="App">
      {/* <TaskList></TaskList> */}
      <Login></Login>
      {/* <Route path='/login' exact component={Login}></Route> */}
      {/* <Route path='/taskList' exact component={TaskList}></Route> */}
    </div>
  );
}

export default App;
