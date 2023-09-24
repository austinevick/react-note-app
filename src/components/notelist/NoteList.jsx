
import { Clear, DeleteForever, Search } from '@mui/icons-material';
import './noteList.css';
import { AddNote } from '../addnote/AddNote';
import { IconButton } from '@mui/material';
import { useState } from 'react';

export default function NoteList({ notes, addNote, deleteNote, searchNote }) {
    const [searchValue, setSearchValue] = useState('');

    return (
        <div className="noteList">
            <center>
                <h1>Notes</h1>
            </center>
            <div className="searchBar">
                <section>
                    <Search />
                    <input onChange={(e) => {
                        searchNote(e.target.value);
                        setSearchValue(e.target.value);
                    }}
                        type="text"
                        value={searchValue}
                        placeholder='Type to search' />

                </section>
                {searchValue.length > 0 ? (
                    <IconButton onClick={() => setSearchValue('')}>
                        <Clear />
                    </IconButton>
                ) : null}
            </div>

            <AddNote addNote={addNote} />
            <div className="note-wrapper">
                <ul >{notes.map((e) => (
                    <li >
                        <p>{e.content}</p>
                        <div style={{
                            display: 'flex', alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <span>{e.date}</span>
                            <IconButton>
                                <DeleteForever
                                    onClick={() => deleteNote(e.id)} />

                            </IconButton>
                        </div>
                    </li>
                ))}
                </ul>

            </div>


        </div>
    );
}
