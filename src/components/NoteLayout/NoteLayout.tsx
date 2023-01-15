import { Navigate, Outlet, useOutletContext, useParams } from "react-router-dom";
// import { Note } from "../Note/Note";
import { Note } from "../../types/App";
import { NoteLayoutProps } from "./props";

export function NoteLayout({ notes }: NoteLayoutProps) {
  const { id } = useParams();
  const note = notes.find((n) => n.id === id);
  if (note === undefined || note === null) return <Navigate to="/" replace />;
  return (
    <>
      <Outlet context={note} />
    </>
  );
}

export function useNote () {
    return useOutletContext<Note>()
}
