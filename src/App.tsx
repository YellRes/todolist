import React from 'react';
import './App.css';

import TaskList from './component/tasklist/index'
import Count from './component/count/index'


function App() {
  return (
    <div className="App">
      <TaskList></TaskList>
      {/* <Count></Count> */}
       {/* <Button type="primary">Button</Button> */}
    </div>
  );
}

export default App;
