import NoteGoal from "./NoteGoal";
import StepGoal from "./StepGoal";

export default function GoalDetail({ goal }) {

    return (
        <div > 
            <div id="home_detail">
                <h1>{goal.title}</h1>
                <p>{goal.motivation}</p>
                <p>{goal.category}</p>
                <p>{goal.finalitation_date}</p>
            </div>
            <div id="steps">
                <h2>Pasos</h2>
                {/* deben ser ordenados por el atributo position */}
                {goal.steps&&goal.steps.map(step=>(
                    <StepGoal step={step} />
                ))}
            </div>
            <div id="notes">
                <h2>Notas</h2>
                {/* deben ser ordendas de  nuevo a  antigua */}
                {goal.notes&&goal.notes.map(note=>(
                    <NoteGoal note={note} />
                ))}
            </div>
        </div>

    )
}