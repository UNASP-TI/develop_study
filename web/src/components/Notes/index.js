import React, { useState } from 'react';
// STATICs
import { Container, DeleteIcon, UpdateIcon } from './styles';

const Notes = () => {
  const [noteValue, setNoteValue] = useState('')
  const [isUpdate, setIsUpdate] = useState({
    note: null,
    state: false,
  })
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

  function createNoteNode(id, value, update = false) {
    if(update) {
      const updatedData = data.map(element => {
        if(element.id === id) {
          element.value = value
          return element
        }
        return element
      })

      setData(updatedData)
      setIsUpdate({ note: null, state: false})
      setNoteValue('')
      return
    }

    setData([...data, {
      id,
      value
    }])
  }
  function submitNote(event) {
    event.preventDefault()

    if(!noteValue) return;
    if(isUpdate.state) {
      createNoteNode(isUpdate.note, noteValue, true)
      return
    }
    createNoteNode(Math.random(), noteValue)
    setNoteValue("")
  }
  function deleteNote(id) {
    const newData = data.filter(element => element.id !== id)
    setData(newData)
  }
  function updateNote(id, value) {
    setNoteValue(value)
    setIsUpdate({ note: id, state: true })
    // createNoteNode(id, value, true)
  }

  return (
    <Container className="notes">
      <div id="notes-group">
        {data.map(note => (
          <span key={note.id} className="note-element">
            {note.value}

            <button type="button" onClick={() => deleteNote(note.id)}>
              <DeleteIcon />
            </button>
            <button type="button" onClick={() => updateNote(note.id, note.value)}>
              <UpdateIcon />
            </button>
          </span>
        ))}
      </div>

      <form action="#" onSubmit={submitNote}>
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
