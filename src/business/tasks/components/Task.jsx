
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTask } from "../../tasks/hooks/useTask";

export default function Task({ prevTask }) {

    const navigate = useNavigate()
    const { editTask } = useTask()

    const [task, setTask] = useState({ ...prevTask });

    useEffect(() => {
        editTask(task);
    }, [task]);

    const handleChange = (event) => {
        const { id, checked } = event.target;
        setTask(prevState => ({ ...prevState, [id]: checked }));
    };

    return (
        <div className="goal row align-items-center">
            <div className="col-auto">
                <input
                    type="checkbox"
                    style={{ width: 25, height: 25, marginLeft: 0 }}
                    id="checked"
                    checked={task?.checked}
                    onChange={handleChange}
                />
            </div>
            <div className="col" onClick={() => navigate("/task/" + task.id)}>
                {task?.title}
            </div>
        </div>

    )
}