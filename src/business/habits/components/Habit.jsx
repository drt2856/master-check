
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useHabit } from "../hooks/useHabit";

export default function Habit({ prevHabit }) {

    const navigate = useNavigate()
 

    return (<>
        <div className="goal row"  >
            <div className="col-11" onClick={() => navigate("/habit/"+prevHabit.id)}>
                <h3>{prevHabit?.title}</h3>
            </div>
        </div>
    </>

    )
}