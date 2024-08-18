import React, { createContext, useCreteContext } from "react"
import { useState } from "react";
import { mock_goals } from "../../mocks/mock";

export const goalContext = createContext();

export function GoalProvider({children}) {
    const [goals, setGoals] = useState(mock_goals)

    function createGoal(goal) {
        setGoals(prevState=>([...prevState,goal]))
    }
    function editGoal(goal) {

    }
    function goalCompleted(id) {

    }
    function deleteGoal(goal_id) {
        setGoals(prevState=>{
            return prevState.filter(goal=>(
                goal_id!==goal&&goal
            ))
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