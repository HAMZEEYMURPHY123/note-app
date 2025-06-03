import styles from './NoteItem.module.css';
export default function NoteItem({ item }) {
 return (
  <div>
   <p className={styles.display}>{item}</p>
  </div>
 );
}
