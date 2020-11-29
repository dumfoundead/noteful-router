import React from 'react'
import { Link } from 'react-router-dom'
import dummyStore from '../dummy-store'

function NoteNav(props) {
    const note = dummyStore.notes.find(note => note.id === props.match.params.noteId)
    const noteFolder = note.folderId
    const folderName = dummyStore.folders.find(folder => folder.id === noteFolder)
    return (
        <div className='sidebar'>
            <br/>
            <Link to='/'>
                <button>Go Back</button>
            </Link>
            <br/>
            <br/>
            <h3>{folderName.name}</h3>
        </div>
    )
}

export default NoteNav;