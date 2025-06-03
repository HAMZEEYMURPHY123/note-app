import { useState } from 'react';
import NoteItem from './NoteItem';
import styles from './form.module.css';
export default function Note() {
 const [note, setNote] = useState('');
 const [notes, setNotes] = useState([]);

 function submitForm(e) {
  e.preventDefault();
  setNotes([...notes, note]);
  setNote('');
 }

 return (
  <div className={styles.hero}>
   <h2>My Notes</h2>
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
   {notes.map((item) => (
    <NoteItem key={item} item={item} />
   ))}
  </div>
 );
}
