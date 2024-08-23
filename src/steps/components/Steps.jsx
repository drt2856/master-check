import { useState } from "react";
import StepGoal from "./StepGoal";
import { StepDetail } from "./StepDetail";
import { NavLink, useNavigate } from "react-router-dom";

export function Steps({ goal }) {



    return (<div id="steps">
        <h2>Pasos</h2>
        {/* deben ser ordenados por el atributo position */}
        {goal?.steps && goal.steps.map(step => (
            <StepGoal step={step} key={step.id} goalId={goal.id} />
        ))}
        <NavLink
            to={"/goal/" + goal.id + "/step/create/"}
            className="btn btn-primary redounder"
        >+</NavLink>


    </div>)

}