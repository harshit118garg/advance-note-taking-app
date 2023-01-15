import { Tag } from "../../types/App";

export interface EditTagsModalProps {
    availableTags: Tag[];
    show: boolean;
    handleClose: () => void;
    onUpdateTag: (id: string, label: string) => void;
    onDeleteTag: (id: string) => void;
}