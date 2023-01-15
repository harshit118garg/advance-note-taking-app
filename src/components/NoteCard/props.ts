import { Tag } from "../../types/App";

export interface NoteCardProps {
  id: string;
  title: string;
  tags: Tag[];
  onDeleteNote: (id: string) => void
}
