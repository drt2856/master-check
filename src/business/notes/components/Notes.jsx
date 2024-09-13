
import Note from "./Note";
import { NavLink} from "react-router-dom";

export function Notes({ goal }) {

    return (<div id="notes">
        {/* deben ser ordenados por el atributo position */}
        {goal?.notes && goal.notes.map(note => (
            <Note note={note} key={note.id} goalId={goal.id} />
        ))}
        <NavLink
            to={"/goal/" + goal.id + "/note/create/"}
            className="btn btn-primary redounder"
        >+</NavLink>
    </div>)
}