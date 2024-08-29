
import { useGoal } from "../hooks/useGoal";
import Goal from "./Goal";
import { NavLink } from "react-router-dom";

export default function Goals() {
    const { goals } = useGoal();





    return (
        <div>
            <div>
                <button className="btn btn-primary">
                    Todos
                </button>
                <button className="btn btn-primary">
                    Todos
                </button>
            </div>
            <div>
                {goals.map(goal => (
                    <Goal key={goal.id} goal={goal} />
                ))}
            </div>



            <NavLink
                to={"/goal/create/"}
                className="btn btn-primary redounder"
            >+</NavLink>


        </div>

    )
}