
import { useHabit } from "../hooks/useHabit"
import { useNavigate } from "react-router-dom";

export default function DeleteHabit({ setShowModal, habitId }) {

    const { deleteHabit } = useHabit()
    const navigate = useNavigate()

    function deleteG(event) {
        deleteHabit(habitId)
        navigate("/habit/")
    }


    return (    
        <div className="my-modal">
            <div className="my-modal-body" >
                Esta seguro que desea eliminar este hábito
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