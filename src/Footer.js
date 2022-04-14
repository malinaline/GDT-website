import React, {Component} from 'react'
import { FaInstagram } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { FaMailchimp } from 'react-icons/fa';


class Footer extends Component {
  render() {
    return (
      <div className="Footer">
       <p>Kontakt</p>
       <FaInstagram /> {' '}
       <FiMail /> {' '}
       <FaMailchimp /> {' '}

       <p>Med stöd från:</p>
       <img src="footer_logo-VG.png" alt="Logga Västra Götalandsregionen" width="100" height=""></img>
      </div>
    )
  }
}

export default Footer