import { useState } from "react";
import StepGoal from "./StepGoal";
import { StepDetail } from "./StepDetail";
import { useNavigate } from "react-router-dom";

export function Steps({ goal }) {

   const navigate = useNavigate()

    return (<div id="steps">
        <h2>Pasos</h2>
        {/* deben ser ordenados por el atributo position */}
        {goal?.steps && goal.steps.map(step => (
            <StepGoal step={step} key={step.id} goalId={goal.id}/>
        ))}
        <button
            className="btn btn-primary redounder"
            onClick={() => navigate("/goal/"+goal.id+"/step/create/")}
        >+</button>
       
        
    </div>)

}