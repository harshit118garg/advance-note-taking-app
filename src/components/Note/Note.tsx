import { Badge, Button, Col, Container, Row, Stack } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import { Link, useNavigate } from "react-router-dom";
import { useNote } from "../NoteLayout/NoteLayout";
import { NoteProps } from "./props";

export function Note({ onDeleteNote }: NoteProps) {
  const note = useNote();
  const navigate = useNavigate();
  return (
    <>
      <Row className="align-content-center mb-4">
        <Col>
          <h2>{note.title}</h2>
          {note.tags.length > 0 && (
            <Stack gap={2} direction="horizontal" className="flex-wrap">
              {note.tags.map((tag) => (
                <Badge className="text-truncate" key={tag.id}>
                  {tag.label}
                </Badge>
              ))}
            </Stack>
          )}
        </Col>
        <Col xs="auto">
          <Stack gap={2} direction="horizontal">
            <Link to={`/${note.id}/edit`}>
              <Button type="submit" variant="warning">
                Edit
              </Button>
            </Link>
            <Button
              type="button"
              variant="danger"
              onClick={() => {
                onDeleteNote(note.id);
                navigate("/");
              }}
            >
              Delete
            </Button>
            <Link to={`/`}>
              <Button type="button" variant="outline-light">
                Back
              </Button>
            </Link>
          </Stack>
        </Col>
      </Row>
      <Container>
        <Row>
          <ReactMarkdown>{note.markdown}</ReactMarkdown>
        </Row>
      </Container>
    </>
  );
}
