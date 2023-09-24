import { useState } from 'react';
import './App.css';

import NoteList from './components/notelist/NoteList';
import { nanoid } from 'nanoid';

function App() {

  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState('');

  const addNote = (text) => {
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
  return (
    <div className="App">
      <NoteList
        notes={notes.filter((e) =>
          e.content.toLowerCase().includes(searchText))}
        addNote={addNote}
        deleteNote={deleteNote}
        searchNote={setSearchText} />

    </div>
  );
}

export default App;
