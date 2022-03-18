import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import Main from './Main';
import './index.css';
import Trailer from './Trailer';
import RenderCard from './Card';
import RenderNavbar from './Navbar';
import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';
import { Button } from 'bootstrap';



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
  return <Button onClick={() => setShow(true)}>Show Alert</Button>;
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
        <p>Vill du ha vårt tjusiga nyhetsbrev? Fyll i din mejladress nedan!</p>
        <label> 
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="Submit" value="Skicka" />
      </form>
    );
  }
}



class App extends Component {
  render() {
    return (
      <div className="container">
        <AlertDismissibleExample />
        <RenderNavbar />
        <Main />
        <Main />
        <Trailer />
        <RenderCard />
        <Main />
        <Main />
        <NameForm />
        <Footer />
      </div>
    )
  }
}

export default App