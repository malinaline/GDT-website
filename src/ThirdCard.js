import React, {Component} from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import {IoTicketSharp} from 'react-icons/io5';


class RenderThirdCard extends Component {
  render() {
    return (
        <Card ClassName="Card" style={{ width: '18rem30' }}>
  <Card.Img variant="top" src="Scum.jpg" />
  <Card.Body>
  <Card.Text>
    <Badge bg="danger">Nyhet</Badge>
    </Card.Text>
    <Card.Title>SCUM-MANIFESTET</Card.Title>
    <Card.Text>
      VAlerie Solanas is back moahhahahaha
    </Card.Text>
    <Button variant="outline-danger" size="lg">
  <IoTicketSharp />  Boka biljett
  </Button>
  </Card.Body>
</Card>

    
    )
  }
}

export default RenderThirdCard