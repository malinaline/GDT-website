import React, {Component} from 'react';
import { Form, Button } from 'react-bootstrap';

class Newsletter extends Component {
  render() {
    return (
        <Form className="Newsletter">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Vill prenumerera på vårt nyhetsbrev?</Form.Label>
          <Form.Control type="email" placeholder="exempel@mejl.se" />
          <Form.Text className="text-muted">
            Vi delar inte dina uppgifter till någon annan.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Jag godkänner att GDT sparar min mejl-adress för utskick av nyhetsbrev." />
        </Form.Group>
        <Button variant="secondary" type="submit">
          Jag vill ha nyhetsbrev
        </Button>
      </Form>
    )
  }
}

export default Newsletter