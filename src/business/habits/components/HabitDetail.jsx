import React, { useMemo, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useHabit } from '../hooks/useHabit';
import DeleteHabit from './DeleteHabit';

export function HabitDetail() {

    const { editHabit, habits } = useHabit();
    const { habitId } = useParams();
    const navigate = useNavigate();

    const initialState = useMemo(() => {
        return habits.find(habit => habit.id === habitId);
    }, [habits, habitId]);

    const [showModal, setShowModal] = useState("none");
    const [habit, setHabit] = useState(initialState);

    useEffect(() => {
        editHabit(habit);
    }, [habit]);

    function handleChange(event) {
        const { id, value, type, checked } = event.target;
        setHabit((prevState) => ({
            ...prevState,
            [id]: type === "checkbox" ? checked : value
        }));
    }

    return (
        <div className='p-2'>
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
            <div className='mt-5'>
                <button className="btn btn-secondary mx-3" onClick={() => navigate("/habit/")} >
                    <i className="material-symbols-outlined">arrow_back</i>
                </button>
                <button className="btn btn-danger mx-3" onClick={() => setShowModal("DELETE")}>
                    <i className="material-symbols-outlined">delete</i>
                </button>
            </div>
            {showModal === "DELETE" && <DeleteHabit setShowModal={setShowModal} habitId={habitId} />}
        </div>
    );
}
