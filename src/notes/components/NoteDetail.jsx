import React, { useMemo, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGoal } from '../../goals/hooks/useGoal';
import DeleteNote  from './DeleteNote';

export function NoteDetail() {
   
    const { editNote, goals } = useGoal();
    const { noteId, goalId } = useParams();
    const navigate = useNavigate();

    const initialState = useMemo(() => {
        return goals.find(goal => goal.id === goalId)?.notes?.find(note => note.id === noteId) || {};
    }, [goals, goalId, noteId]);

    const [showModal, setShowModal] = useState("none");
    const [note, setNote] = useState(initialState);

    useEffect(() => {
        editNote(note, goalId);
    }, [note]);

    const handleChange = (event) => {
        const { id, value } = event.target;
        setNote(prevState => ({ ...prevState, [id]: value }));
    };

    return (
        <div>
            <div>
                
                <div>
                    <label htmlFor="note" className="col-12">Descripción</label>
                    <textarea id="note" style={{ minHeight: 250 }} className="col-12" value={note?.note || ''} onChange={handleChange} />
                </div>
                <div>
                    <button className="btn btn-secondary mx-3" onClick={() => navigate("/goal/"+goalId+"/tab?tab=Notas")} >
                        <i className="material-symbols-outlined">arrow_back</i>
                    </button>
                    <button className="btn btn-danger mx-3" onClick={() => setShowModal("DELETE")}>
                        <i className="material-symbols-outlined">delete</i>
                    </button>
                </div>
                {showModal === "DELETE" && <DeleteNote setShowModal={setShowModal} goalId={goalId} noteId={noteId} />}
            </div>
        </div>
    );
}
