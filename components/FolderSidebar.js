import React from 'react'
import { NavLink } from 'react-router-dom'
import AddFolderBtn from './AddFolderBtn'
import dummyStore from '../dummy-store'

function FolderSidebar(props) {
    const folderLink = dummyStore.folders.map(folder => {
        return (
            <li key={folder.id}>
                <NavLink 
                    to={`/folder/${folder.id}`}
                    onClick={() => props.updateNotes(folder.id)}
                >
                    {folder.name}
                </NavLink>
            </li>
        );
    });

    return (
        <div className='sidebar'>
            <ul>
                <h3>{folderLink}</h3>
                <AddFolderBtn />
            </ul>
        </div>
    );
};

export default FolderSidebar;