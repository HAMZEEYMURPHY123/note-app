import NoteItem from './NoteItem';
export default function FormList({ notes }) {
 return (
  <div>
   {notes.map((item) => (
    <NoteItem key={item} item={item} />
   ))}
  </div>
 );
}
