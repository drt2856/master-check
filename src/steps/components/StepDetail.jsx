import { useState } from "react";
import { useGoal } from "../../goals/hooks/useGoal";
import { useNavigate, useParams } from "react-router-dom";
import DeleteStep from "./DeleteStep";

export function StepDetail() {

    const { createStep, editStep, goals } = useGoal()
    const { stepId, goalId } = useParams()
    const navigate = useNavigate()
    
    
    const prevStep = ()=>{
        if(goalId===undefined){
            return undefined
        }

       return  goals.find(goal => goal.id == goalId).steps?.find(step => step.id == stepId)
    } 

    const [showModal, setShowModal] = useState("none");

    const intialState = () => {
        
        if (!prevStep) {
            return {
                title: "",
                motivation: "",
                category: "",
                finalitation_date: ""
            }
        } else {
            return { ...prevStep }
        }
    }

    const [step, setStep] = useState(intialState)



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
        if (!stepId) {
            createStep(step, goalId)
        }
        else {
            editStep(step, goalId)
        }


    }

    return (
        <div  >
            <div className="" >
                <div>
                    <label htmlFor="title" className="col-12">Título</label>
                    <input type="text" id="title" className="col-12" value={step?.title} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="description" className="col-12">Descripción</label>
                    <textarea id="description" style={{ minHeight: 250 }} className="col-12" value={step?.description} onChange={handleChange} />
                </div>
                <div>
                    <button className="btn btn-secondary mx-3" onClick={() => navigate(-1)} >
                        <i className="material-symbols-outlined">
                            arrow_back
                        </i>
                    </button>
                    <button className="btn btn-secondary mx-3" onClick={() =>setShowModal("DELETE")} >
                        <i className="material-symbols-outlined">
                            delete
                        </i>
                    </button>
                    <button className="btn btn-primary"  onClick={handleSubmit}>{prevStep?"listo":"crear"} </button>
                </div>

                {showModal === "DELETE" && <DeleteStep setShowModal={setShowModal} goalId={goalId} stepId={stepId}/>} 
            </div>
        </div>
    )

}