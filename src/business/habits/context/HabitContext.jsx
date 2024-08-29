import React, { createContext } from "react"
import { useState } from "react";
import shortid from "shortid";
import { mock_habits } from "../../../mocks/mock";

export const habitContext = createContext();

function useSaveHabitslsLocalStorage() {
    function get() {
        return JSON.parse(localStorage.getItem("habits"))
    }
    function set(data) {
        return localStorage.setItem("habits", JSON.stringify(data))
    }
    return ({ get, set })
}

export function HabitProvider({ children }) {

    const { set, get } = useSaveHabitslsLocalStorage()
    const [habits, setHabits] = useState(getData())

    function getData() {
        if (!get()) {
            console.log(!get(), get());
            return mock_habits
        } else {
            return get()
        }
    }

    function createHabit(habit) {
        habit.id = shortid.generate()
        setHabits(prevState => {
            const newState = [...prevState, habit];
            set(newState)
            return (newState)
        });
    }
    function editHabit(updatedHabit) {
        setHabits(prevState => {
            const newState = prevState.map(habit =>
                habit.id === updatedHabit.id ? updatedHabit : habit
            );
            set(newState);
            return newState;
        });
    }

    function deleteHabit(habitId) {

        setHabits(prevState => {
            const newState = prevState.filter(habit => (
                habitId !== habit.id
            ))
            set(newState)
            return newState;
        })
    }
    function deletCompletedHabits() {
        setHabits(prevState => {
            const newState = prevState.filter(habit => (
                habit.checked != true
            ))
            set(newState)
            return newState;
        })
    }
    

    return (
        <habitContext.Provider
            value={{
                habits,
                createHabit,
                editHabit,
                deleteHabit,
                deletCompletedHabits,
            }}
        >
            {children}
        </habitContext.Provider>
    )

}