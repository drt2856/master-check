import { useState } from "react";
import { useGoal } from "../../goals/hooks/useGoal";
import { useNavigate, useParams } from "react-router-dom";

export function CreateStep() {

    const { goalId } = useParams()

    const [step, setStep] = useState({
        id: "",
        title: "",
        checked: false,
        description: "",
        position: -1
    })

    const { createStep } = useGoal()

    const navigate = useNavigate()


    function handleChange(event) {
        if (event.target.value === " ") {
            return;
        }

        setStep((prevState) => ({
            ...prevState,
            [event.target.id]: event.target.value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (step.title===""){
            ///Mensaje de error
            return
        }
            createStep(step, goalId)
        navigate("/goal/"+goalId+"/tab?tab=Pasos")
    }

    return (
        <div>
            <div className="" >
                <div>
                    <label htmlFor="title" className="col-12">Título</label>
                    <input type="text" id="title" className="col-12" value={step.title} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="description" className="col-12">Descripción</label>
                    <textarea id="description" style={{ minHeight: 250 }} className="col-12" value={step.description} onChange={handleChange} />
                </div>
                <div>
                    <button className="btn btn-secondary mx-3" onClick={() => navigate("/goal/"+goalId+"/tab?tab=Pasos")} >
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