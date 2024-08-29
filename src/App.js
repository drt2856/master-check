
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { GoalProvider } from './business/goals/context/GoalContext';
import GoalPage from './business/goals/pages/GoalPage';
import GoalDetail from './business/goals/component/GoalDetail';
import { StepDetail } from './business/steps/components/StepDetail';
import { CreateStep } from './business/steps/components/CreateStep';
import CreateGoal from './business/goals/component/CreateGoal';
import { CreateNote } from './business/notes/components/CreateNote';
import { NoteDetail } from './business/notes/components/NoteDetail';
import { Tasks } from './business/tasks/components/Tasks';
import { TaskProvider } from './business/tasks/context/TaskContext';
import { CreateTask } from './business/tasks/components/CreateTask';
import { TaskDetail } from './business/tasks/components/TaskDetail';
import { Habits } from './business/habits/components/Habits';
import { CreateHabit } from './business/habits/components/CreateHabit';
import { HabitDetail } from './business/habits/components/HabitDetail';
import { HabitProvider } from './business/habits/context/HabitContext';
import { Header } from './ui/header/Header';


function App() {


  return (
    <GoalProvider>
        <TaskProvider>
            <HabitProvider>
                <Router>
                    <Header />
                    <div style={{ padding: 25 }}>
                        <Routes>
                            <Route path="/goal" element={<GoalPage />} />
                            <Route path="/goal/:id/tab" element={<GoalDetail />} />
                            <Route path="/goal/create/" element={<CreateGoal />} />
                            <Route path="/goal/:goalId/step/:stepId" element={<StepDetail />} />
                            <Route path="/goal/:goalId/step/create/" element={<CreateStep />} />
                            <Route path="/goal/:goalId/note/:noteId/" element={<NoteDetail />} />
                            <Route path="/goal/:goalId/note/create/" element={<CreateNote />} />
                            <Route path="/task/" element={<Tasks />} />
                            <Route path="/task/create/" element={<CreateTask />} />
                            <Route path="/task/:taskId/" element={<TaskDetail />} />
                            <Route path="/habit/" element={<Habits />} />
                            <Route path="/habit/create/" element={<CreateHabit />} />
                            <Route path="/habit/:habitId/" element={<HabitDetail />} />
                        </Routes>
                    </div>
                </Router>
            </HabitProvider>
        </TaskProvider>
    </GoalProvider>
);

}

export default App;
