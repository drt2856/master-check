import React, { useMemo, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DeleteStep from './DeleteStep';
import { useGoal } from '../../goals/hooks/useGoal';

export function StepDetail() {
    const { editStep, goals } = useGoal();
    const { stepId, goalId } = useParams();
    const navigate = useNavigate();

    const initialState = useMemo(() => {
        return goals.find(goal => goal.id === goalId)?.steps?.find(step => step.id === stepId) || {};
    }, [goals, goalId, stepId]);

    const [showModal, setShowModal] = useState("none");
    const [step, setStep] = useState(initialState);

    useEffect(() => {
        editStep(step, goalId);
    }, [step]);

    const handleChange = (event) => {
        const { id, value } = event.target;
        setStep(prevState => ({ ...prevState, [id]: value }));
    };


    return (
        <div>
            <div>
                <div>
                    <label htmlFor="title" className="col-12">Título</label>
                    <input type="text" id="title" className="col-12" value={step?.title || ''} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="description" className="col-12">Descripción</label>
                    <textarea id="description" style={{ minHeight: 250 }} className="col-12" value={step?.description || ''} onChange={handleChange} />
                </div>
                <div>
                    <button className="btn btn-secondary mx-3" onClick={() => navigate(-1)}>
                        <i className="material-symbols-outlined">arrow_back</i>
                    </button>
                    <button className="btn btn-secondary mx-3" onClick={() => setShowModal("DELETE")}>
                        <i className="material-symbols-outlined">delete</i>
                    </button>
                </div>
                {showModal === "DELETE" && <DeleteStep setShowModal={setShowModal} goalId={goalId} stepId={stepId} />}
            </div>
        </div>
    );
}
