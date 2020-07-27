import React from 'react';
import './App.css';

import AddTask from './component/addtask/index'
import TaskList from './component/tasklist/index'


function App() {
  return (
    <div className="App">
      <AddTask/>
      <TaskList></TaskList>
       {/* <Button type="primary">Button</Button> */}
    </div>
  );
}

export default App;
