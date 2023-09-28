import { nanoid } from "nanoid";
import { createContext, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const NoteContext = createContext({});

export function useNoteContext() {
    return useContext(NoteContext);
}

export function NoteProvider({ children }) {
    const [notes, setNotes] = useLocalStorage('notes', []);
    const [searchText, setSearchText] = useState('');


    function searchNotes(value) {
        setSearchText(value.target.value);
    }
    const notesList = notes.filter((e) => e.content
        .toLowerCase()
        .includes(searchText));

    function addNote(text) {
        const date = new Date();
        const note = {
            id: nanoid(),
            content: text,
            date: date.toLocaleDateString()
        };
        const newNotes = [...notes, note];
        setNotes(newNotes);
    };

    const deleteNote = (id) => {
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
    };



    return <NoteContext.Provider value={{
        notesList,
        addNote,
        deleteNote,
        setSearchText,
        searchNotes
    }}>
        {children}
    </NoteContext.Provider>;
}
