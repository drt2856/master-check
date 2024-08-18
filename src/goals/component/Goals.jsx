import { useState } from "react";
import { useGoal } from "../hooks/useGoal";
import CreateGoal from "./CreateGoal";
import Goal from "./Goal";
import GoalDetail from "./GoalDetail";

export default function Goals() {
    const { goals } = useGoal();

    const [showModal, setShowModal] = useState("none");


    return (
        <div>
            {/* <div>
                <button className="btn btn-primary">
                    Todos
                </button>
                <button className="btn btn-primary">
                    Todos
                </button>
            </div>
            <div>
                {goals.map(goal => (
                    <Goal key={goal.id} goal={goal} />
                ))}
            </div>

            {showModal !== "none" && <CreateGoal setShowModal={setShowModal} />}

            <button
                className="btn btn-primary redounder"
                onClick={() => setShowModal("ADD")}
            >+</button> */}

            <GoalDetail goal={goals[0]}/>

        </div>

    )
}