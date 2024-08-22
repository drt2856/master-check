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

    function createStep(step, goalId) {
        step.id = shortid.generate()
        const goal = goals.find(goal => goal.id === goalId)
        goal.steps.push(step)
        editGoal(goal)
    }

    function editStep(step, goalId) {
        
        const goal = goals.find(goal => goal.id == goalId)
        const auxSteps = goal.steps.map(auxStep =>
            goal.id == step.id ? step : auxStep
        )
        goal.steps = auxSteps;
        editGoal(goal)
    }

    function deleteStep(stepId,goalId) {

        const goal = goals.find(goal=> goal.id==goalId);
        goal.steps= goal.steps.filter(step=>step!=stepId)
        
        editGoal(goal)
        
    }


    return (
        <goalContext.Provider
            value={{
                goals,
                createGoal,
                editGoal,
                deleteGoal,
                changPositionOfGoal,
                createStep,
                editStep,
                deleteStep
            }}
        >
            {children}
        </goalContext.Provider>
    )

}