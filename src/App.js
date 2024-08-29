
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { GoalProvider } from './goals/context/GoalContext';
import GoalPage from './goals/pages/GoalPage';
import GoalDetail from './goals/component/GoalDetail';
import { StepDetail } from './steps/components/StepDetail';
import { CreateStep } from './steps/components/CreateStep';
import CreateGoal from './goals/component/CreateGoal';
import { CreateNote } from './notes/components/CreateNote';
import { NoteDetail } from './notes/components/NoteDetail';
import { Tasks } from './tasks/components/Tasks';
import { TaskProvider } from './tasks/context/TaskContext';
import { CreateTask } from './tasks/components/CreateTask';
import { TaskDetail } from './tasks/components/TaskDetail';
import { Habits } from './habits/components/Habits';
import { CreateHabit } from './habits/components/CreateHabit';
import { HabitDetail } from './habits/components/HabitDetail';
import { HabitProvider } from './habits/context/HabitContext';
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
