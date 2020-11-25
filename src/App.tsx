import React, { useState, useEffect } from 'react';
import './App.css';
import { HashRouter, Switch} from 'react-router-dom';
import AuthRouter from './router/authRoute'
import GlobalStats from './pages/test/globalstate'
const BASE_URL = "https://corona.lmao.ninja/v2";

// import Count from './component/count/index'


function App() {
  const [globalStats, setGlobalStats] = useState({})

  useEffect(() => {
    const fetchGlobalStats = async () => {
      const res = await fetch(`${BASE_URL}/all`)
      const data = await res.json()
      setGlobalStats(data)
    }

    fetchGlobalStats()
    const intervalId = setInterval(fetchGlobalStats, 5000)
    return () => {clearInterval(intervalId)}
  }, [])

  return (
    <div className="App">
      {/* <TaskList></TaskList> */}
      {/* <Login></Login> */}
      <HashRouter>
        <Switch>
         <AuthRouter/>
        </Switch>
        {/* <GlobalStats stats={globalStats}></GlobalStats> */}
      </HashRouter>
    </div>
  );
}

export default App;
