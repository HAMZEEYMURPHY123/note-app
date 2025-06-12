import { useState } from 'react';

import styles from './Note.module.css';
import Form from './Form.jsx';
import FormList from './FormList.jsx';
export default function Note() {
 const [notes, setNotes] = useState([]);
 return (
  <div className={styles.hero}>
   <h2>My Notes</h2>
   <Form notes={notes} setNotes={setNotes} />
   <FormList notes={notes} setNotes={setNotes} />
  </div>
 );
}
