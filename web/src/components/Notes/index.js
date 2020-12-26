import React, { useState } from 'react';
// STATICs
import { Container, ButtonDelete } from './styles';

const Notes = () => {
  const [noteValue, setNoteValue] = useState('')
  const [data, setData] = useState([
    {
      id: 1,
      value: 'Elias garcia alexandre - eliasallex'
    },
    {
      id: 2,
      value: 'Ethics or moral philosophy is a branch of philosophy that "involves systematizing, defending, and recommending concepts of right and wrong behavior".'
    }
  ])

  function createNoteNode(id, value) {
    setData([...data, {
      id,
      value
    }])
  }
  function createNote(event) {
    event.preventDefault()

    if(!noteValue) return;
    createNoteNode(Math.random(), noteValue)
    setNoteValue("")
  }
  function deleteNote(id) {
    const newData = data.filter(element => element.id !== id)
    setData(newData)
  }

  return (
    <Container className="notes">
      <div id="notes-group">
        {data.map(note => (
          <span key={note.id} className="note-element">
            {note.value}

            <button type="button" onClick={() => deleteNote(note.id)}>
              <ButtonDelete />
            </button>
          </span>
        ))}
      </div>

      <form action="#" onSubmit={createNote}>
        <input
          type="text"
          placeholder="Inserir uma anotação"
          value={noteValue}
          onChange={(e) => setNoteValue(e.target.value)}
        />
      </form>
    </Container>
  );
}

export default Notes;
