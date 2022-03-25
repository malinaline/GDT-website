import React, {Component} from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import {IoTicketSharp} from 'react-icons/io5';


class RenderSecondCard extends Component {
  render() {
    return (
        <Card ClassName="Card" style={{ width: '18rem30' }}>
  <Card.Img variant="top" src="Stortorget_09_webb.jpg" />
  <Card.Body>
  <Card.Text>
    <Badge bg="danger">Nyhet</Badge>
    </Card.Text>
    <Card.Title>Stortorget</Card.Title>
    <Card.Text>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </Card.Text>
    <div className="d-grid gap-2">
  <Button variant="outline-danger" size="lg">
    Läs mer
  </Button>
  <Button variant="outline-danger" size="lg">
  <IoTicketSharp /> Boka biljett
  </Button>
</div>
  </Card.Body>
</Card>

    )
  }
}

export default RenderSecondCard