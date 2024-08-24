import React, { useMemo, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTask } from '../../tasks/hooks/useTask';
import DeleteTask from './DeleteTask';

export function TaskDetail() {
   
    const { editTask, tasks } = useTask();
    const { taskId } = useParams();
    const navigate = useNavigate();

    const initialState = useMemo(() => {
        return tasks.find(task => task.id == taskId);
    }, [tasks, taskId]);

    const [showModal, setShowModal] = useState("none");
    const [task, setTask] = useState(initialState);

    useEffect(() => {
        editTask(task);
    }, [task]);

    const handleChange = (event) => {
        const { id, value } = event.target;
        setTask(prevState => ({ ...prevState, [id]: value }));
    };

    return (
        <div>
            <div>
                
                <div>
                    <label htmlFor="title" className="col-12">Tarea</label>
                    <textarea id="title" style={{ minHeight: 250 }} className="col-12" value={task?.title || ''} onChange={handleChange} />
                </div>
                <div>
                    <button className="btn btn-secondary mx-3" onClick={() => navigate("/task/")} >
                        <i className="material-symbols-outlined">arrow_back</i>
                    </button>
                    <button className="btn btn-danger mx-3" onClick={() => setShowModal("DELETE")}>
                        <i className="material-symbols-outlined">delete</i>
                    </button>
                </div>
                {showModal === "DELETE" && <DeleteTask setShowModal={setShowModal} taskId={taskId}  />}
            </div>
        </div>
    );
}
