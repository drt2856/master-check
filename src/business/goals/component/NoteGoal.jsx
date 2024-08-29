export default function NoteGoal({ note }) {
   

    return (
        <div className="goal" >
                <p>{note.note}</p>
                <p>{note.create_date}</p>
        </div>
    )
}