import { Add } from '@mui/icons-material';
import { useState } from 'react';
import { useNoteContext } from '../../context/NoteContext';

export const AddNote = () => {
    const [noteText, setNoteText] = useState('');
    const characterLimit = 200;
    const { addNote } = useNoteContext();
    return (
        <div className="addnewnote">

            <textarea name="note" id="note" cols="30"
                rows="10"
                placeholder="Type to add a new note..."
                value={noteText}
                onChange={(event) => {
                    if (characterLimit === noteText.length) return;
                    setNoteText(event.target.value);
                }}
            ></textarea>
            <div className="note-footer" style={{
                display: 'flex', alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <small>{characterLimit - noteText.length} remaining</small>
            </div>
            <div className='addnote' onClick={() => {
                if (noteText.trim().length > 0) {
                    addNote(noteText);
                    setNoteText('');
                    return;
                }
                alert('Please enter a text');
            }}>
                <Add />
            </div>
        </div>
    );
};
