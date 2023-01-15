import { Container } from "react-bootstrap";
import { EditNoteProps } from "./props";
import { NoteForm } from "../NoteForm/NoteForm";
import { useNote } from "../NoteLayout/NoteLayout";

export function EditNote({ onSubmit, onAddTag, availableTags }: EditNoteProps) {
  const note = useNote();
  return (
    <>
      <h2 className="my-3 fw-bolder">Edit Note</h2>
      <Container>
        <NoteForm
          title={note.title}
          markdown={note.markdown}
          tags={note.tags}
          onSubmit={(data) => onSubmit(note.id, data)}
          onAddTag={onAddTag}
          availableTags={availableTags}
        />
      </Container>
    </>
  );
}
