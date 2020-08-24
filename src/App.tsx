import React from 'react';
import './App.css';


import TaskList from './component/tasklist'
import Login from './component/login'
import { Spin } from 'antd';

// import Count from './component/count/index'


function App() {
  return (
    <div className="App">
      {/* <TaskList></TaskList> */}
      <Login />
    </div>
  );
}

export default App;
