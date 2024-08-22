import { useNavigate, useParams } from "react-router-dom";
import NoteGoal from "./NoteGoal";
import { useGoal } from "../hooks/useGoal";
import { useEffect, useState } from "react";
import Tabs from "../../ui/tab/Tab";
import DeleteGoal from "./DeleteGoal";
import EditGoal from "./EditGoal";
import { Steps } from "../../steps/components/Steps";

export default function GoalDetail() {

    const { id } = useParams();
    const { goals, editGoal } = useGoal();
    const [goal, setGoal] = useState(null);
    const [showModal, setShowModal] = useState("none");




    useEffect(() => {
        const foundGoal = goals.find(goal => goal.id == id);

        setGoal(foundGoal);
    }, [id, goals]);


    function completeGoal() {
        goal.completed=true;
        editGoal(goal)
        //falta hacer un filtro y una redireccion cuando el goal se completa para que no aparesca mas en le seccion principal
    }

    if(!goal?.id){
        return(<div>No encontrado</div>)
    }


    return (
        <div >
            <Tabs
                tabs={[
                    {
                        label: "Detalles",
                        component:
                            < div id="home_detail" >
                                <div className="goal-detail-bldy">
                                    <h1>{goal && goal.title}</h1>
                                    <p>
                                        <i className="material-symbols-outlined">
                                            military_tech
                                        </i>
                                        {goal && goal.motivation}</p>

                                    <div>
                                        <i className="material-symbols-outlined">
                                            label
                                        </i>
                                        {goal && goal.category}
                                    </div>

                                    <div className="d-inline">
                                        <i className="material-symbols-outlined"> event_available</i>
                                        {goal && goal.finalitation_date}
                                    </div>
                                </div>

                                <div id="interative-buttons">
                                    <button className="btn btn-outline-primary btn-redounder-left"
                                        onClick={()=>completeGoal()}
                                    >
                                        <i className="material-symbols-outlined">
                                            check
                                        </i>
                                    </button>
                                    <button className="btn btn-outline-success btn-in-the-middle"
                                     onClick={() => { setShowModal("edit") }}
                                    >
                                        <i className="material-symbols-outlined">
                                            edit
                                        </i>
                                    </button>
                                    <button className="btn btn-outline-warning btn-redounder-rihgt"
                                        onClick={() => { setShowModal("delete") }}
                                    >
                                        <i className="material-symbols-outlined">
                                            delete
                                        </i>
                                    </button>

                                </div>
                            </div>
                    },
                    {
                        label: "Pasos",
                        component:<Steps goal={goal}/>
                            
                    },
                    {
                        label: "Notas",
                        component:
                            <div id="notes">
                                <h2>Notas</h2>
                                {/* deben ser ordendas de  nuevo a  antigua */}
                                {goal?.notes && goal.notes.map(note => (
                                    <NoteGoal key={note.id} note={note} />
                                ))}
                            </div>
                    }

                ]
                }

            />

            {showModal === "delete" && <DeleteGoal setShowModal={setShowModal} goal_id={goal.id} />} 
            {showModal === "edit" && <EditGoal setShowModal={setShowModal} prevGoal={goal} />}


        </div >

    )
}