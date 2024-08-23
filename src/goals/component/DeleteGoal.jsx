import { useState } from "react";
import { useGoal } from "../hooks/useGoal"
import { useNavigate } from "react-router-dom";

export default function DeleteGoal({ setShowModal, goal_id }) {

    const { deleteGoal } = useGoal()
    const navigate = useNavigate()

    function deleteG(goal_id) {
        deleteGoal(goal_id)
        navigate("/")
    }


    return (
        <div className="my-modal">
            <form className="my-modal-body" onSubmit={()=>deleteG(goal_id)}>
                Esta seguro que desea eliminar esta meta
                <div className="push-bottom">
                    <button className="btn-secondary btn" onClick={() => setShowModal("none")}>
                        Cerrar
                    </button>
                    <input type="submit" value="Eliminar" className="btn-danger btn" />
                </div>
            </form>

        </div>
    )
}