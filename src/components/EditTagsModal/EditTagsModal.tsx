import { Modal, Stack, Form, Row, Col, Button } from "react-bootstrap";
import { EditTagsModalProps } from "./props";
import { TfiClose } from "react-icons/tfi";

export function EditTagsModal({
  availableTags,
  handleClose,
  show,
  onDeleteTag,
  onUpdateTag,
}: EditTagsModalProps) {
  return (
    <>
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Tags</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Stack gap={2}>
              {availableTags.map((tag) => {
                return (
                  <Row key={tag.id}>
                    <Col>
                      <Form.Control
                        type="text"
                        value={tag.label}
                        onChange={(e) => onUpdateTag(tag.id, e.target.value)}
                      />
                    </Col>
                    <Col xs="auto">
                      <Button variant="outline-danger" onClick={() => onDeleteTag(tag.id)}>
                        <TfiClose />
                      </Button>
                    </Col>
                  </Row>
                );
              })}
            </Stack>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
