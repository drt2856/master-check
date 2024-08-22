
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Goals from './goals/component/Goals';
import { GoalProvider } from './goals/context/GoalContext';
import GoalPage from './goals/pages/GoalPage';
import GoalDetail from './goals/component/GoalDetail';
import StepGoal from './steps/components/StepGoal';
import { StepDetail } from './steps/components/StepDetail';


function App() {


  return (

    <Router>
      <Routes>
        <Route path="/" element={<GoalPage />} />
        <Route path="/goal/:id" element={<GoalProvider><GoalDetail /></GoalProvider>}/>
        <Route path="/goal/:goalId/step/:stepId" element={<GoalProvider><StepDetail/></GoalProvider>}/>
      </Routes>
    </Router>


  );
}

export default App;
