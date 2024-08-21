import React, { createContext, useCreteContext } from "react"
import { useState } from "react";
import { mock_goals } from "../../mocks/mock";
import shortid from "shortid";

export const goalContext = createContext();

function useSaveGoalsLocalStorage() {
    function get() {
        return JSON.parse(localStorage.getItem("goals"))
    }
    function set(data) {
        return localStorage.setItem("goals", JSON.stringify(data))
    }
    return ({ get, set })
}

export function GoalProvider({ children }) {

    const { set, get } = useSaveGoalsLocalStorage()
    const [goals, setGoals] = useState(getData())

    function getData() {
        if (!get()) {
            console.log(!get(), get());
            return mock_goals
        } else {
            return get()
        }
    }

    function createGoal(goal) {
        goal.id = shortid.generate()
        setGoals(prevState => {
            const newState = [...prevState, goal];
            set(newState)
            return (newState)
        });
    }
    function editGoal(updatedGoal) {
        console.log(updatedGoal.completed);
        setGoals(prevState => {
            const newState = prevState.map(goal =>
                goal.id === updatedGoal.id ? updatedGoal : goal
            );
            set(newState);
            return newState;
        });
    }

    
    
    function deleteGoal(goal_id) {
        
        setGoals(prevState => {
            const newState = prevState.filter(goal => (
                goal_id != goal.id
            ))
            console.log(goal_id, newState);
            set(newState)
            return newState;
        })
    }
    function changPositionOfGoal(goal) {

    }

    return (
        <goalContext.Provider
            value={{
                goals,
                createGoal,
                editGoal,
                deleteGoal,
                changPositionOfGoal

            }}
        >
            {children}
        </goalContext.Provider>
    )

}