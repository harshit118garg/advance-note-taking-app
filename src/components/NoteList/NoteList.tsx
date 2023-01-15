import { useMemo, useState } from "react";
import { Col, Container, Row, Stack, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactSelect from "react-select";
import { Tag } from "../../types/App";
import { NoteListProps } from "./props";
import { NoteCard } from "../NoteCard/NoteCard";
import { EditTagsModal } from "../EditTagsModal/EditTagsModal";

export function NoteList({
  availableTags,
  notes,
  onDeleteNote,
  onDeleteTag,
  onUpdateTag,
}: NoteListProps) {
  const [title, setTitle] = useState("");
  const [editTagsModal, setEditTagsModal] = useState(false);
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  const filteredNotes = useMemo(() => {
    // console.log('list of notes -> ', notes)
    // console.log('list of selected tags -> ', selectedTags)
    return notes.filter((note) => {
      return (
        (title === "" ||
          note.title.toLowerCase().includes(title.toLowerCase())) &&
        (selectedTags.length === 0 ||
          selectedTags.every((tag) =>
            note.tags.some((noteTag: { id: string }) => noteTag.id === tag.id)
          ))
      );
    });
  }, [title, selectedTags, notes]);

  return (
    <>
      <Row className="my-3">
        <Col>
          <h2 className="fw-bolder">Note List</h2>
        </Col>
        <Col xs="auto">
          <Stack gap={2} direction="horizontal">
            <Link to="/new">
              <Button type="submit" variant="primary">
                Create
              </Button>
            </Link>
            <Button
              type="button"
              variant="outline-light"
              onClick={() => setEditTagsModal(true)}
            >
              Edit Tags
            </Button>
          </Stack>
        </Col>
      </Row>
      <Row>
        <Container>
          <Form>
            <Row>
              <Col>
                <Form.Group controlId="title">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="tags">
                  <Form.Label>Tags</Form.Label>
                  <ReactSelect
                    isMulti
                    options={availableTags.map((tag) => {
                      return { label: tag.label, value: tag.id };
                    })}
                    value={selectedTags.map((tag) => {
                      return {
                        label: tag.label,
                        value: tag.id,
                      };
                    })}
                    onChange={(tags) => {
                      setSelectedTags(
                        tags.map((tag) => {
                          return { label: tag.label, id: tag.value };
                        })
                      );
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Container>
      </Row>
      <Container className="mt-4">
        <Row xs={1} sm={4} lg={3} xl={3} className="g-3">
          {filteredNotes.map((note) => {
            console.log("note passed in notecard -> ", note);
            return (
              <Col key={note.id}>
                <NoteCard
                  id={note.id}
                  title={note.title}
                  tags={note.tags}
                  onDeleteNote={onDeleteNote}
                />
              </Col>
            );
          })}
        </Row>
        <Row>
          <EditTagsModal
            availableTags={availableTags}
            handleClose={() => setEditTagsModal(false)}
            show={editTagsModal}
            onUpdateTag={onUpdateTag}
            onDeleteTag={onDeleteTag}
          />
        </Row>
      </Container>
    </>
  );
}
