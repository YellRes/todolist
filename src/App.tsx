import React from 'react';
import './App.css';
import { HashRouter, Switch} from 'react-router-dom';
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
