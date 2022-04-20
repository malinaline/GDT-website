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
      Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, 
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 

      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Uppdaterad för 1 timme sedan</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="olgaravn.jpg" />
    <Card.Body>
      <Card.Title>Mitt arbete, nu i bokformat och på svenska</Card.Title>
      <Card.Text>
      Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, 
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
 {' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Uppdaterad för 2 dagar sedan</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="gdt-goes-vr.jpg" />
    <Card.Body>
      <Card.Title>VR är det nya</Card.Title>
      <Card.Text>
      Lorem ipsum dolor sit amet, 
      consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Ut enim ad minim veniam, 
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      Duis aute irure dolor in reprehenderit in voluptate velit esse 
      cillum dolore eu fugiat nulla pariatur. 
    
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Uppdaterad för 1 vecka sedan</small>
    </Card.Footer>
  </Card>
</CardGroup>

    
    )
  }
}

export default RenderCard