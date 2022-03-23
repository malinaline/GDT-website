import React, {Component} from 'react'
import { Card } from 'react-bootstrap';

class RenderLogo extends Component {
  render() {
    return (
      <div className="gdtLogo">
         <Card.Img img src="gdt-logo.svg" alt="Logga Göteborgs Dramatiska teater" width="1300" height="" />
      </div>
    )
  }
}

export default RenderLogo