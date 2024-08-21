
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Goals from './goals/component/Goals';
import { GoalProvider } from './goals/context/GoalContext';
import GoalPage from './goals/pages/GoalPage';
import GoalDetail from './goals/component/GoalDetail';


function App() {


  return (

    <Router>
      <Routes>
        <Route path="/" element={<GoalPage />} />
        <Route path="/goal/:id" element={
          <GoalProvider>
            <GoalDetail />
          </GoalProvider>
        }
        />
      </Routes>
    </Router>


  );
}

export default App;
