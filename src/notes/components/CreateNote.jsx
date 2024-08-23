import { useState } from "react";
import { useGoal } from "../../goals/hooks/useGoal";
import { useNavigate, useParams } from "react-router-dom";

export function CreateNote() {

    const { goalId } = useParams()

    const [note, setNote] = useState({
        id: "",
        note: "",
        dateCreate: new Date()
    })

    const { createNote } = useGoal()

    const navigate = useNavigate()


    function handleChange(event) {
        

        setNote((prevState) => ({
            ...prevState,
            [event.target.id]: event.target.value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault();
        
            createNote(note, goalId)
        navigate("/goal/2/tab?tab=Notas")
    }

    return (
        <div>
            <div className="" >
                <div>
                    <label htmlFor="note" className="col-12">Nota</label>
                    <textarea id="note" style={{ minHeight: 250 }} className="col-12" value={note.note} onChange={handleChange} />
                </div>
                <div>
                    <button className="btn btn-secondary mx-3" onClick={() => navigate("/goal/2/tab?tab=Notas")} >
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