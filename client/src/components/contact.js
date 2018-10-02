import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-grid-system';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import axios from 'axios';

import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

class Contact extends Component {
  
  constructor() {
    super()

    this.state = {
      name: '',
      email: '',
      message: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  async handleSubmit(e) {
    e.preventDefault()
    
    const { name, email, message } = this.state

    const form = await axios.post('/api/form', {
      name,
      email,
      message
    })

  }

  render() {
    return (
    	<div className="contact-page">
        <Container>
          <Row>
            <Col><h1>Got any project for me, any referral or<br/>questions maybe?</h1>              
            </Col>           
          </Row>

          <Row>
          <hr/>
          </Row>

          <Row><h2>I'm currently accepting new projects or fulltime employment. Please tell me about it.</h2></Row>

          <Row>
            <Col sm={6}>
              <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Label for="name">Name:</Label>
                  <Input 
                    type="text"
                    name="name"
                    onChange={this.handleChange}
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="email">Email:</Label>
                  <Input 
                    type="email"
                    name="email"
                    onChange={this.handleChange}
                    required
                  />
                </FormGroup>          

                <FormGroup>
                  <Label for="message">Message:</Label>
                  <Input 
                    type="textarea"
                    name="message"
                    onChange={this.handleChange}
                    required
                  />
                </FormGroup>   

                <AwesomeButton
                  type="secondary"
                >
                  Submit
                </AwesomeButton>       
              </Form>            
            </Col>
            <Col sm={6}>
              <div className="contact-info">
                <h5><FaPhone/> +639055449732</h5>
                <h5><FaEnvelope/> jsmndnzrrea23@gmail.com</h5>
              </div>
                          
            </Col>                         
          </Row>
        </Container>


        
      </div>
    );
  }
}

export default Contact;