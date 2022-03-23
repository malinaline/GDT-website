import React, {Component} from 'react';
import { Card, Button } from 'react-bootstrap';
import {IoTicketSharp} from 'react-icons/io5';
import {AiFillEye} from 'react-icons/ai';


class RenderCard extends Component {
  render() {
    return (
        <Card style={{ width: '18rem30' }}>
  <Card.Img variant="top" src="carmen.jpg" />
  <Card.Body>
  <Card.Text>
    </Card.Text>
    <Card.Title>ATT TVEKA</Card.Title>
    <Card.Text>
      Vårens föreställning lerom ipsum tjajaja tralala dfeuhfefefgeg huahduadhejdg vhdfiuhf dshfisudhf
    </Card.Text>
    <Button variant="secondary"><IoTicketSharp /> Boka biljett</Button>
    <Button variant="danger"><AiFillEye /> Läs mer</Button>
  </Card.Body>
</Card>

    
    )
  }
}

export default RenderCard