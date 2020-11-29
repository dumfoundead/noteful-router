import React from 'react'
import { Link } from 'react-router-dom'

function NoteList(props) {
    return (
        <div className='noteListItems'>
            <ul>
                {props.notes.map(note => {
                    return (
                        <li key={note.id}>
                            <Link to={`/notes/${note.id}`}>
                                <h3>{note.name}</h3>
                                <p>{note.modified}</p>
                                <button className='deleteBtn'>Delete Note</button>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default NoteList;