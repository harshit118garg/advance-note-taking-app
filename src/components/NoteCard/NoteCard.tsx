import { Badge, Card, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NoteCardProps } from "./props";
import styles from "./styles.module.scss";
import { AiFillDelete } from "react-icons/ai";

export function NoteCard({ id, title, tags, onDeleteNote }: NoteCardProps) {
  return (
    <>
      <Card
        as={Link}
        to={`/${id}`}
        className={`h-100 text-reset text-decoration-none ${styles.card}`}
      >
        <Card.Body>
          <Stack
            gap={2}
            className="align-items-center justify-content-center h-100"
          >
            <Stack
              direction="horizontal"
              className="d-flex justify-content-between"
            >
              <span className="fs-5">{title}</span>
              <div className={styles.deleteCard}>
                <AiFillDelete onClick={() => onDeleteNote(id)} />
              </div>
            </Stack>
            {tags.length > 0 && (
              <Stack
                gap={1}
                direction="horizontal"
                className="justify-content-center flex-wrap"
              >
                {tags.map((tag) => (
                  <Badge bg="light" text="dark" className="text-truncate" key={tag.id}>
                    {tag.label}
                  </Badge>
                ))}
              </Stack>
            )}
          </Stack>
        </Card.Body>
      </Card>
    </>
  );
}
