import React, {Component} from 'react';
import { Card, Button, Badge } from 'react-bootstrap';



class RenderCard extends Component {
  render() {
    return (
    
        <Card style={{ width: '18rem30' }}>
  <Card.Img variant="top" src="carmen.jpg" />
  <Card.Body>
  <Card.Text>
    <Badge bg="danger">Nyhet</Badge>
    <Badge bg="info">Skolföreställning</Badge>
    </Card.Text>
    <Card.Title>ATT TVEKA</Card.Title>
    <Card.Text>
      Vårens föreställning lerom ipsum tjajaja tralala dfeuhfefefgeg huahduadhejdg vhdfiuhf dshfisudhf .
    </Card.Text>
    <Button variant="secondary">Boka biljetter</Button>
  </Card.Body>
</Card>

    
    )
  }
}

export default RenderCard