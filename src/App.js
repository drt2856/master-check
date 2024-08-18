
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Goals from './goals/component/Goals';
import { GoalProvider } from './goals/context/GoalContext';
import GoalPage from './goals/pages/GoalPage';


function App() {


  return (
    <div className='min-container'>
      <GoalPage />
    </div>


  );
}

export default App;
