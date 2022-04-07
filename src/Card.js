import React, {Component} from 'react';
import { Card, Button } from 'react-bootstrap';
import {IoTicketSharp} from 'react-icons/io5';
import {CardGroup} from 'react-bootstrap';


class RenderCard extends Component {
  render() {
    return (
<CardGroup>

  <Card>
    
    <Card.Img variant="top" src="docklounge.jpg" />
    <Card.Body>
      <Card.Title>Doc Lounge</Card.Title>
      <Card.Text>
        Dock Lounge ä tillbaka 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="olgaravn.jpg" />
    <Card.Body>
      <Card.Title>Mitt arbete, nu i bokformat och på svenska</Card.Title>
      <Card.Text>
      Olga Ravns bok som blev storslagen dansk teater som blev teater på svenska som nu släpps som bok på Ellerströms i dagarna! {' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 2 days ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="gdt-goes-vr.jpg" />
    <Card.Body>
      <Card.Title>VR är det nya</Card.Title>
      <Card.Text>
     Nu ska ni får höra. Lorem ipsum trallalala.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 1 week ago</small>
    </Card.Footer>
  </Card>
</CardGroup>

    
    )
  }
}

export default RenderCard