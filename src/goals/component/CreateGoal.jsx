import { useState } from "react";
import { useGoal } from "../hooks/useGoal"

export default function CreateGoal({setShowModal}) {

    const { createGoal } = useGoal();

    const [goal, setGoal] = useState({
        title:"",
        motivation:"",
        category:"",
        finalitation_date:""
    })

    function handleCreate(event) {
        event.preventDefault();
        createGoal(goal);
        setShowModal("none")
    }

    function handleChange(event) {
        setGoal((prevState) => ({
            ...prevState,
            [event.target.id]: event.target.value
        }))
    }

    return (
        <div className="modal">
            <form className="modal-body" onSubmit={handleCreate}>
                <div>
                    <label htmlFor="title">Titulo</label>
                    <input type="text" id="title" value={goal.title} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="title">Motivación</label>
                    <input type="text" id="motivation" value={goal.motivation} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="title">Categoría</label>
                    <input type="text" id="category" value={goal.category} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="title">Titulo</label>
                    <input type="date" id="finalitation_date" value={goal.finalitation_date} onChange={handleChange}/>
                </div>
                <div className="push-bottom">
                    <button className="btn-secondary btn" onClick={()=>setShowModal("none")}>
                        Cerrar
                    </button>
                    <input type="submit" value="Crear" className="btn-primary btn"/>
                </div>

            </form>
        </div>
    )
}