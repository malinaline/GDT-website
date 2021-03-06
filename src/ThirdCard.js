import React, {Component} from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import {IoTicketSharp} from 'react-icons/io5';
import { AiFillEye } from 'react-icons/ai';


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
    Skitvarmt välkommen till en stunds avprogrammering. Manligheten har ju gjort hela världen till ett skitställe, men här skapar vi en ny plats för ohämmad vrede, kamplystnad och total kärlek. Skit i logiken.
    </Card.Text>
    <div className="d-grid gap-2">
  <Button variant="outline-danger" size="lg"
  onClick={(e) => {
    e.preventDefault();
    window.location.href='https://kulturpunkten.nu/arrangorer/goteborgs-dramatiska-teater/';
    }}>
    <AiFillEye /> Läs mer
  </Button>
  <Button variant="outline-danger" size="lg"
   onClick={(e) => {
    e.preventDefault();
    window.location.href='https://kulturpunkten.nu/arrangorer/goteborgs-dramatiska-teater/';
    }}>
  <IoTicketSharp /> Boka biljett
  </Button>
</div>
  </Card.Body>
</Card>

    
    )
  }
}

export default RenderThirdCard