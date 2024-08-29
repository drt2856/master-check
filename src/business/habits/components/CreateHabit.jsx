import { useState } from "react";
import { useHabit } from "../hooks/useHabit";
import { useNavigate, useParams } from "react-router-dom";


export function CreateHabit() {
    const [habit, setHabit] = useState({
        id: "",
        title: "",
        description: "",
        days: {
            lunes: true,
            martes: true,
            miercoles: true,
            jueves: true,
            viernes: true,
            sabado: true,
            domingo: true,
        }
    });

    const { createHabit } = useHabit();
    const navigate = useNavigate();

    function handleChange(event) {
        const { id, value, type, checked } = event.target;
        setHabit((prevState) => ({
            ...prevState,
            [id]: type === "checkbox" ? checked : value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        createHabit(habit);
        navigate("/habit/");
    }

    return (
        <div className="">
            <div>
                <label htmlFor="title" className="col-12">Nombre</label>
                <input type="text" id="title" className="col-12" value={habit.title} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="description" className="col-12">Descripción</label>
                <textarea id="description" style={{ minHeight: 250 }} className="col-12" value={habit.description} onChange={handleChange} />
            </div>
            <label htmlFor="">En que dia de la semana hacer este habito </label>
            <div className="calendar-grid">
                {['L', 'M', 'X', 'J', 'V', 'S', 'D'].map((day, index) => (
                    <div className="calendar-item" key={index}>
                        <span>{day}</span>
                    </div>
                ))}
                {Object.keys(habit.days).map((day, index) => (
                    <div className="calendar-item" key={index + 7}>
                        <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id={day}
                            checked={habit.days[day]}
                            onChange={(e) => setHabit((prevState) => ({
                                ...prevState,
                                days: {
                                    ...prevState.days,
                                    [day]: e.target.checked
                                }
                            }))}
                        />
                    </div>
                ))}
            </div>
            <div className="mt-5">
                <button className="btn btn-secondary mx-3" onClick={() => navigate("/habit/")} >
                    <i className="material-symbols-outlined">
                        arrow_back
                    </i>
                </button>
                <button className="btn btn-primary" onClick={handleSubmit}>crear</button>
            </div>
        </div>
    );
    

}