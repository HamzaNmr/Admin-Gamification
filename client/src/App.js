import React, { useState } from "react";
import {  Routes, Route , useNavigate} from "react-router-dom";
import DisplayUsers from "./Pages/Users/DisplayUsers";
import Dashboard from "./Pages/Dashboard/Dashboard";
import DisplayTopUsers from "./Pages/TopUsers/DisplayTopUsers"
import Task from "./Pages/task/Task";
import Reward from "./Pages/reward/Reward";
import DisplayChart from "./Pages/statistics/DisplayChart";
import SingleUser from "./Pages/single/SingleUser";
import Auth from "./Pages/auth/Auth";
import { recognition } from "./API/voicerecognition";
import DisplayGroups from "./Pages/displayGroups/DisplayGroups";
import DisplayBadges from "./Pages/badges/DisplayBadges";









function App() {
  
  const navigate = useNavigate();
  const [stopReco, setStopReco] = useState(false);

  recognition.onresult = (event) => {
    const command = event.results[0][0].transcript;

    if (command.includes("go to") || command.includes("navigate to")) {
      if (command.includes("home") || command.includes("dashboard")) {
        navigate("/dashboard");
      } else if (
        command.includes("users") ||
        command.includes("all user")
      ) {
        navigate("/users");
      }

      else if (
        command.includes("rewards") ||
        command.includes("All reward")
      ) {
        navigate("/reward");
      }

      else if (
        command.includes("tasks") ||
        command.includes("All task")
      ) {
        navigate("/task");
      }

      else if (
        command.includes("statistic") ||
        command.includes("analyse")
      ) {
        navigate("/barChart");
      }

   
    } else if (
      command.includes("stop listening") ||
      command.includes("stop recognition") ||
      command.includes("stop recognizing") ||
      command.includes("stop voice controlling") ||
      command.includes("stop voice control")
    ) {
      recognition.stop();
      setStopReco(true);
    }
  };

  recognition.onend = () => {
    if (!stopReco) {
      recognition.start();
    }
  };
   
  return (
    
   
   <Routes>
    <Route path="/" element={<Auth />} />
     <Route path="/dashboard" element={<Dashboard />}/>
     <Route path="/task" element={<Task />}/>
     <Route path="/reward" element={<Reward />}/>
     <Route path="/users" element={<DisplayUsers />} />
     <Route path="/:id" element={<SingleUser />} /> 
     <Route path="/TopUsers" element={<DisplayTopUsers />} />
     <Route path="/barChart" element={<DisplayChart />} />
     <Route path="/group" element={<DisplayGroups />}/>  
     <Route path="/badges" element={<DisplayBadges />} />
  
   </Routes>
  
 
  );
}

export default App;
