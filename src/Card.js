import React, {Component} from 'react';
import { Card, Button } from 'react-bootstrap';
import {IoTicketSharp} from 'react-icons/io5';
import {CardGroup} from 'react-bootstrap';


class RenderCard extends Component {
  render() {
    return (
<CardGroup>
  <Card>
    <Card.Img variant="top" src="bild.jpg" />
    <Card.Body>
      <Card.Title>Tjolahoppsan</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="Scum.jpg" />
    <Card.Body>
      <Card.Title>Scum-manifestet</Card.Title>
      <Card.Text>
      t was popularised in the 1960s et sheets containing Lorem Ipsum passages, and more recent simply dummy text{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 2 days ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="carmen.jpg" />
    <Card.Body>
      <Card.Title>Carmen</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action. 
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