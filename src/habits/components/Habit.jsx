
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useHabit } from "../../habits/hooks/useHabit";

export default function Habit({ prevHabit }) {

    const navigate = useNavigate()
    const { editHabit } = useHabit()

    const [habit, setHabit] = useState({ ...prevHabit });

    useEffect(() => {
        editHabit(habit);
    }, [habit]);

    const handleChange = (event) => {
        const { id, checked } = event.target;
        setHabit(prevState => ({ ...prevState, [id]: checked }));
    };

    return (<>
        <div className="goal row"  >
            <input
                type="checkbox"
                style={{ width: 25, height: 25 , marginLeft:0}}
                id="checked"
                checked={habit?.checked}
                onChange={handleChange}
            />
            <div className="col-11" onClick={() => navigate("/habit/"+habit.id)}>
                <h3>{habit?.title}</h3>
            </div>
        </div>
    </>

    )
}