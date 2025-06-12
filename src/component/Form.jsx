import { useState } from 'react';
import { nanoid } from 'nanoid';
import styles from './form.module.css';
export default function Form({ notes, setNotes }) {
 const [note, setNote] = useState('');

 function submitForm(e) {
  e.preventDefault();

  if (note.trim() === '') {
   alert('Note cannot be empty');
   return;
  }
  const newNote = {
   id: nanoid(),
   text: note,
  };

  setNotes([...notes, newNote]);

  setNote('');
 }
 return (
  <div>
   {' '}
   <form className={styles.form}>
    <input
     className={styles.inputNote}
     onChange={(e) => setNote(e.target.value)}
     type="text"
     placeholder="note something down"
     value={note}
    />

    <button
     className={styles.submit}
     onClick={(e) => submitForm(e)}
     type="submit"
    >
     Add
    </button>
   </form>
  </div>
 );
}
