
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
import CreateGoal from './goals/component/CreateGoal';
import Note from './notes/components/Note';
import { CreateNote } from './notes/components/CreateNote';
import { NoteDetail } from './notes/components/NoteDetail';
import { Tasks } from './tasks/components/Tasks';
import { TaskProvider } from './tasks/context/TaskContext';
import { CreateTask } from './tasks/components/CreateTask';
import { TaskDetail } from './tasks/components/TaskDetail';


function App() {


  return (
    <GoalProvider>
      <TaskProvider>
      <Router>
        <Routes>
          <Route path="/master-check/" element={<GoalPage />} />
          <Route path="/master-check/goal/:id/tab" element={<GoalDetail />} />
          <Route path="/master-check/goal/create/" element={<CreateGoal />} />
          <Route path="/master-check/goal/:goalId/step/:stepId" element={<StepDetail />} />
          <Route path="/master-check/goal/:goalId/step/create/" element={<CreateStep />} />
          <Route path="/master-check/goal/:goalId/note/:noteId/" element={<NoteDetail />} />
          <Route path="/master-check/goal/:goalId/note/create/" element={<CreateNote />} />
          <Route path="/master-check/task/" element={<Tasks />} />
          <Route path="/master-check/task/create/" element={<CreateTask />} />
          <Route path="/master-check/task/:taskId/" element={<TaskDetail />} />


        </Routes>
      </Router>
      </TaskProvider>
      
    </GoalProvider>



  );
}

export default App;
