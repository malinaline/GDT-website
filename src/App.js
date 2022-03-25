import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import Main from './Main';
import Accessability from './Accessability';
import './index.css';
import RenderCard from './Card';
import RenderSecondCard from './SecondCard';
import RenderThirdCard from './ThirdCard';
import RenderAbout from './About';
import RenderNavbar from './Navbar';
import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';



//Cookie
function AlertDismissibleExample() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Vi älskar kakor!</Alert.Heading>
        <p>
       Godkänn Cookies på sidan genom att kryssa ner den här rutan.
        </p>
      </Alert>
    );
  }
  return <Button variant="outline-danger" onClick={() => setShow(true)}>Om cookies</Button>;
}

// vill du ha vårt nyhetsbrev

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Kanon! Följande email har registrerats: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form className='Newsletter' onSubmit={this.handleSubmit}>
        <h2>Prenumerera på vårt nyhetsbrev</h2>
        <p>Vill du ha vårt tjusiga nyhetsbrev? Fyll i din mejladress nedan!</p>
        <label> 
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="Submit" value="Skicka" />
      </form>
    );
  }
}

//Carousel
function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src="Scum.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
      
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src="Scum.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-50"
          src="Scum.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
  

    


class App extends Component {
  render() {
    return (
      <div className="container">

        <RenderNavbar />
        <ControlledCarousel />
        <Main />
        <RenderCard />
        <Main />
        <RenderSecondCard />
        <Main />
        <RenderThirdCard />
        <Main />
        <RenderAbout />
        <NameForm />
        <Accessability />
        <Main />
        <Footer />
        <AlertDismissibleExample />
     
        
       
      </div>
    )
  }
}

export default App