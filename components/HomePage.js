import React from 'react'
import { Link } from 'react-router-dom'
import dummyStore from '../dummy-store'

function HomePage() {
    return (
        <div className='noteList'>
            <ul>
                {dummyStore.notes.map(note => {
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

export default HomePage