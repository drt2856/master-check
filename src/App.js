
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Goals from './goals/component/Goals';
import { GoalProvider } from './goals/context/GoalContext';
import GoalPage from './goals/pages/GoalPage';
import GoalDetail from './goals/component/GoalDetail';
import StepGoal from './steps/components/StepGoal';
import { StepDetail } from './steps/components/StepDetail';
import { CreateStep } from './steps/components/CreateStep';


function App() {


  return (
    <GoalProvider>
      <Router>
        <Routes>
          <Route path="/" element={<GoalPage />} />
          <Route path="/goal/:id" element={<GoalDetail />} />
          <Route path="/goal/:goalId/step/:stepId" element={<StepDetail />} />
          <Route path="/goal/:goalId/step/create/" element={<CreateStep />} />

        </Routes>
      </Router>
    </GoalProvider>



  );
}

export default App;
