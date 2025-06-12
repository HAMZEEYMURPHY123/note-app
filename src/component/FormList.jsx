import NoteItem from './NoteItem';
export default function FormList({ notes, setNotes }) {
 return (
  <div>
   {notes.map((item) => (
    <NoteItem key={item.id} item={item} notes={notes} setNotes={setNotes} />
   ))}
  </div>
 );
}
