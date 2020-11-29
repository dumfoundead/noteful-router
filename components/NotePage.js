import React from 'react'
import dummyStore from '../dummy-store'

function NotePage(props) {
    const note = dummyStore.notes.find(note => note.id === props.match.params.noteId)
    const noteFolderId = note.folderId
    return (
        <div className='notePage' onChange={() => props.noteURL(noteFolderId)}>
            <h3>{note.name}</h3>
            <p>{note.content}</p>
        </div>
    )
}

export default NotePage;