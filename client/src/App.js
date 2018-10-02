import React, { Component } from 'react';
import './App.css';
import { Layout, Navigation, Drawer, Content, Grid, Cell } from 'react-mdl';
import Main from './components/main';

import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

import { FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa';

import { NavLink } from 'react-router-dom';

import MessengerPlugin from 'react-messenger-plugin';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
          <Layout fixedDrawer>
              <Drawer>
                  <img
    					src="https://patsy.palmsolutions.co/img/me.jpg"
    					alt="avatar"
                        className="avatar-img"
    			  />
                  <Navigation>
                      <NavLink to="/skills" activeClassName="active">MY SKILLS</NavLink>
                      <NavLink to="/projects" activeClassName="active">PORTFOLIO</NavLink>
                      <NavLink to="/contact" activeClassName="active">CONTACT</NavLink>
                  </Navigation>
       
                  <div className="social-btn">
                    <AwesomeButton type="github" href="https://github.com/jsmndnzrrea23" target="_blank"><FaGithub size="1.3em"/></AwesomeButton> &nbsp;&nbsp;               
                    <AwesomeButton type="linkedin" href="https://www.linkedin.com/in/jessmond" target="_blank"><FaLinkedin size="1.3em"/></AwesomeButton>  &nbsp;&nbsp;
                    <AwesomeButton type="link" href="https://drive.google.com/file/d/13JP6DL8E-qilP1mT9wpJSEyPSTHCaJQ1/view" target="_blank"><FaFilePdf size="1.3em"/></AwesomeButton>                                  
                  </div>
                
              </Drawer>
              <Content>
                  <div className="page-content" />
                  <Main/>
              </Content> 
              
          </Layout>
      </div>

    );
  }
}

export default App;
