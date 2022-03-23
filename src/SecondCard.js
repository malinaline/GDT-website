import React, {Component} from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import {IoTicketSharp} from 'react-icons/io5';


class RenderCard extends Component {
  render() {
    return (
        <Card style={{ width: '18rem30' }}>
  <Card.Img variant="top" src="Stortorget_09_webb.jpg" />
  <Card.Body>
  <Card.Text>
    <Badge bg="danger">Nyhet</Badge>
    </Card.Text>
    <Card.Title>Stortorget</Card.Title>
    <Card.Text>
      Vårens föreställning lerom ipsum tjajaja tralala dfeuhfefefgeg huahduadhejdg vhdfiuhf dshfisudhf
    </Card.Text>
    <Button variant="secondary"><IoTicketSharp /> Boka biljett</Button>
  </Card.Body>
</Card>

    
    )
  }
}

export default RenderCard