
import { useTask } from "../hooks/useTask"
import { useNavigate } from "react-router-dom";

export default function DeleteTask({ setShowModal, taskId }) {

    const { deleteTask } = useTask()
    const navigate = useNavigate()

    function deleteG(event) {
        deleteTask(taskId)
        navigate("/task/")
    }


    return (    
        <div className="my-modal">
            <div className="my-modal-body" >
                Esta seguro que desea eliminar esta tarea
                <div className="push-bottom">
                    <button className="btn-secondary btn" onClick={() => setShowModal("none")}>
                        Cancelar
                    </button>
                    <button value="Eliminar" className="btn-danger btn" onClick={deleteG} >Eliminar</button>
                </div>
            </div>

        </div>
    )
}