import { NavLink } from "react-router-dom"
import { useTask } from "../hooks/useTask"
import Task from "./Task"

export function Tasks() {

    const { tasks } = useTask()
    
    return (
        <div>
            <div>
                {tasks.map(task => (
                    <Task key={task.id} prevTask={task} />
                ))}
            </div>



            <NavLink
                to={"/task/create/"}
                className="btn btn-primary redounder"
            >+</NavLink>


        </div>
    )
}