
import StepGoal from "./StepGoal";
import { NavLink} from "react-router-dom";

export function Steps({ goal }) {

    return (<div id="steps">
        {/* deben ser ordenados por el atributo position */}
        {goal?.steps && goal.steps.map(step => (
            <StepGoal prevStep={step} key={step.id} goalId={goal.id} />
        ))}
        <NavLink
            to={"/goal/" + goal.id + "/step/create/"}
            className="btn btn-primary redounder"
        >+</NavLink>
    </div>)
}