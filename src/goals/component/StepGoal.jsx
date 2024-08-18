export default function StepGoal({ step }) {
   

    return (
        <div className="goal" >
            <input type="checkbox"  id="checked" />
            <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
            </div>
        </div>
    )
}