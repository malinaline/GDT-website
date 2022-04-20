import React, {Component} from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { IoTicketSharp } from 'react-icons/io5';
import { AiFillEye } from 'react-icons/ai';


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
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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

export default RenderSecondCard