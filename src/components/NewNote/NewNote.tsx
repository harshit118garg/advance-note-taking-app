import { Container } from "react-bootstrap";
import { NewNoteProps } from "./props";
import { NoteForm } from "../NoteForm/NoteForm";

export function NewNote({ onSubmit, onAddTag, availableTags }: NewNoteProps) {
  return (
    <>
      <h2 className="my-3 fw-bolder">New Note</h2>
      <Container>
        <NoteForm
          onSubmit={onSubmit}
          onAddTag={onAddTag}
          availableTags={availableTags}
        />
      </Container>
    </>
  );
}
