
import { useGoal } from "../../goals/hooks/useGoal"
import { useNavigate } from "react-router-dom";

export default function DeleteStep({ setShowModal, goalId, stepId }) {

    const { deleteStep } = useGoal()
    const navigate = useNavigate()

    function deleteG(event) {
       console.log(stepId);
        deleteStep(stepId,goalId)
        navigate(-1)
    }


    return (    
        <div className="my-modal">
            <div className="my-modal-body" >
                Esta seguro que desea eliminar esta meta
                <div className="push-bottom">
                    <button className="btn-secondary btn" onClick={() => setShowModal("none")}>
                        Cancelar
                    </button>
                    <button value="Eliminar" className="btn-primary btn" onClick={deleteG} >de</button>
                </div>
            </div>

        </div>
    )
}