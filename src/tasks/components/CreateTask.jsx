import { useState } from "react";
import { useTask } from "../../tasks/hooks/useTask";
import { useNavigate, useParams } from "react-router-dom";

export function CreateTask() {

   

    const [task, setTask] = useState({
        id: "",
        title: "",
    })

    const { createTask } = useTask()

    const navigate = useNavigate()


    function handleChange(event) {
        

        setTask((prevState) => ({
            ...prevState,
            [event.target.id]: event.target.value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault();
            createTask(task)
        navigate("/task/")
    }

    return (
        <div>
            <div className="" >
                <div>
                    <label htmlFor="tilte" className="col-12">Tarea</label>
                    <textarea id="title" style={{ minHeight: 250 }} className="col-12" value={task.task} onChange={handleChange} />
                </div>
                <div>
                    <button className="btn btn-secondary mx-3" onClick={() => navigate("/task/")} >
                        <i className="material-symbols-outlined">
                            arrow_back
                        </i>
                    </button>
                    <button className="btn btn-primary" onClick={handleSubmit}> crear </button>
                </div>
            </div>
        </div>
    )

}