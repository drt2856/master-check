import { NavLink } from "react-router-dom"
import { useHabit } from "../hooks/useHabit"
import Habit from "./Habit"

export function Habits() {

    const { habits } = useHabit()
    
    return (
        <div>
            <div>
                {habits.map(habit => (
                    <Habit key={habit.id} prevHabit={habit} />
                ))}
            </div>



            <NavLink
                to={"/habit/create/"}
                className="btn btn-primary redounder"
            >+</NavLink>


        </div>
    )
}