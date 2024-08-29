import { useState } from "react";
import { useGoal } from "../hooks/useGoal"

export default function EditGoal({ setShowModal, prevGoal }) {

    const { editGoal } = useGoal();

    const [goal, setGoal] = useState({ ...prevGoal })

    function handleCreate(event) {
        event.preventDefault();
        editGoal(goal);
        setShowModal("none")
    }

    function handleChange(event) {
        setGoal((prevState) => ({
            ...prevState,
            [event.target.id]: event.target.value
        }))
    }

    return (
        <div className="my-modal">
            <form className="my-modal-body" onSubmit={handleCreate}>
                <div>
                    <label htmlFor="title">Titulo</label>
                    <input type="text" id="title" value={goal.title} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="title">Motivación</label>
                    <input type="text" id="motivation" value={goal.motivation} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="title">Categoría</label>
                    <input type="text" id="category" value={goal.category} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="title">Titulo</label>
                    <input type="date" id="finalitation_date" value={goal.finalitation_date} onChange={handleChange} />
                </div>
                <div className="push-bottom">
                    <button className="btn-secondary btn" onClick={() => setShowModal("none")}>
                        Cerrar
                    </button>
                    <input type="submit" value="Modificar " className="btn-primary btn" />
                </div>

            </form>
        </div>
    )
}