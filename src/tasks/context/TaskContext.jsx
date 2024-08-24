import React, { createContext } from "react"
import { useState } from "react";
import shortid from "shortid";
import { mock_tasks } from "../../mocks/mock";

export const taskContext = createContext();

function useSaveTaskslsLocalStorage() {
    function get() {
        return JSON.parse(localStorage.getItem("tasks"))
    }
    function set(data) {
        return localStorage.setItem("tasks", JSON.stringify(data))
    }
    return ({ get, set })
}

export function TaskProvider({ children }) {

    const { set, get } = useSaveTaskslsLocalStorage()
    const [tasks, setTasks] = useState(getData())

    function getData() {
        if (!get()) {
            console.log(!get(), get());
            return mock_tasks
        } else {
            return get()
        }
    }

    function createTask(task) {
        task.id = shortid.generate()
        setTasks(prevState => {
            const newState = [...prevState, task];
            set(newState)
            return (newState)
        });
    }
    function editTask(updatedTask) {
        setTasks(prevState => {
            const newState = prevState.map(task =>
                task.id === updatedTask.id ? updatedTask : task
            );
            set(newState);
            return newState;
        });
    }

    function deleteTask(taskId) {

        setTasks(prevState => {
            const newState = prevState.filter(task => (
                taskId !== task.id
            ))
            set(newState)
            return newState;
        })
    }
    function deletCompletedTasks() {
        setTasks(prevState => {
            const newState = prevState.filter(task => (
                task.checked != true
            ))
            set(newState)
            return newState;
        })
    }
    

    return (
        <taskContext.Provider
            value={{
                tasks,
                createTask,
                editTask,
                deleteTask,
                deletCompletedTasks,
            }}
        >
            {children}
        </taskContext.Provider>
    )

}