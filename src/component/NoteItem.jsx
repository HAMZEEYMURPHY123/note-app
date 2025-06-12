import styles from './NoteItem.module.css';
export default function NoteItem({ item, notes, setNotes }) {
 function handleDelete(item) {
  setNotes(notes.filter((note) => note !== item));
 }

 return (
  <div>
   <p className={styles.display}>
    {item.text}
    <span>
     <button onClick={() => handleDelete(item)}>Delete</button>

     <button onClick={() => handleEdit(item)}>Edit</button>
    </span>
   </p>
  </div>
 );
}
