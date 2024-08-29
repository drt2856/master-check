import { useState } from "react";
import { useGoal } from "../hooks/useGoal"
import { useNavigate } from "react-router-dom";

export default function CreateGoal() {

    const { createGoal } = useGoal();
    const navigate = useNavigate()

    const [goal, setGoal] = useState({
        title:"",
        motivation:"",
        category:"",
        finalitation_date:"",
        steps:[],
        notes:[]
    })

    function handleCreate(event) {
        event.preventDefault();
        createGoal(goal);
        navigate(-1)
    }

    function handleChange(event) {
        setGoal((prevState) => ({
            ...prevState,
            [event.target.id]: event.target.value
        }))
    }

    return (
        <div className="">
            <form className="my-modal-body" onSubmit={handleCreate}>
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
                    <button className="btn-secondary btn" onClick={()=>navigate(-1)}>
                        Cerrar
                    </button>
                    <input type="submit" value="Crear" className="btn-primary btn"/>
                </div>

            </form>
        </div>
    )
}