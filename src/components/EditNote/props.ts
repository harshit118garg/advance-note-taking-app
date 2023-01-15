import { NoteData, Tag } from "../../types/App";

export interface EditNoteProps {
  onSubmit: (id:string, data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
}
