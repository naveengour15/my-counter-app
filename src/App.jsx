import React, { useEffect, useState } from 'react';

import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';
import './App.css';

const App = () => {
  const [globalCount, setGlobalCount] = useState(0);
  const [userCount, setUserCount] = useState(0);

  const API_URI = "http://localhost/5000";

  const fetchGlobalCount = async () => {
    const res = await fetch(`${API_URI}/counter/global`, {
      method: "POST"
    });
    const data = await res.json();
    setGlobalCount(data);
  };

  // useEffect(() => {
  //   fetchGlobalCount();
  // }, []);

  const incrementGlobal = async () => {
    // const res = await fetch(`${API_URI}/counter/global/increment`, {
    //   method: "POST"
    // });
    // const globalData = await res.json();
    let globalData = globalCount + 1;
    setGlobalCount(globalData);

  }

  const incrementUser = async () => {
    // const res = await fetch(`${API_URI}/counter/user/increment`, {
    //   method: "POST"
    // });
    // const userData = await res.json();
    let userData = userCount + 1;
    setUserCount(userData);
  }

  return (
     <div className="main_div"   >

        <div className="center_div">
           <h1>Global Counter</h1>
            <br />
            <div className="btn_div">      
            
            <h2>{globalCount}</h2>            
              <Tooltip  title="Add" arrow>
            
                <Button variant="outlined" onClick={incrementGlobal} className="btn_green"> <AddIcon /> </Button>
                </Tooltip>
            </div>
        </div>


        <div className="center_div">
           <h1>User Counter </h1>
            <br />
            <div className="btn_div">  
            <h2>{userCount}</h2>              
              <Tooltip  title="Add" arrow>
            
                <Button variant="outlined" onClick={incrementUser} className="btn_green"> <AddIcon /> </Button>
                </Tooltip>
            </div>
        </div>    
    </div>
  );
}

export default App;
