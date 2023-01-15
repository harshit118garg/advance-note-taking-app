import { Tag } from "../../types/App";

export interface NoteListProps {
  availableTags: Tag[];
  notes: SimplifiedNote[];
  onDeleteNote: (id: string) => void;
  onUpdateTag: (id: string, label: string) => void;
  onDeleteTag: (id: string) => void;
}

export interface SimplifiedNote {
  tags: Tag[];
  title: string;
  id: string;
}
