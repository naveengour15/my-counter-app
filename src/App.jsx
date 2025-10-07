import React, { useEffect, useState } from 'react';

import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';
import './App.css';
const App = () => {
  const [globalCount, setGlobalCount] = useState(0);
  const [userCount, setUserCount] = useState(0);

  const API_URI = "https://localhost:7123/api/Home/";

  const fetchGlobalCount = async () => {
   
    try {
      const res = await fetch(`${API_URI}GetCount`, {
        method: "GET",
      });
      if (!res.ok) throw new Error("Server error");
      const data = await res.json();
      const obj = JSON.parse(data);
console.log(obj.Count);

    setGlobalCount(obj.Count);

        
    } catch (err) {
      console.error("Fetch error:", err);
    }
    

  };

  useEffect(() => {
    fetchGlobalCount();
  }, []);

  const incrementGlobal = async () => {
    
    let globalData = globalCount + 1;
    setGlobalCount(globalData);

  }

    const saveGlobalCount = async () => { 
     
          try {
            const res = await fetch(`${API_URI}SaveCount?count=${globalCount}`, {
              method: "POST",
            });

            if (!res.ok) throw new Error("Server error");
            const data = await res.json();
            console.log("Response:", data);
            setGlobalCount(data.Count);
          } catch (err) {
            console.error("Fetch error:", err);
          }

          
    }

  const incrementUser = async () => {
   
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
                
                <Button variant="outlined" onClick={saveGlobalCount} className="btn_green"> Save </Button>
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