import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";



class Skills extends Component {
  render() {
    return (
    	<div className="skills-content">
    		<Grid>          
    			<Cell col={7}>  
           
            <h5>Node.js & Express</h5>     
            <Progress
              percent={78}
              status="default"
              theme={{
                default: {
                  color: '#82bb23'
                }
              }}
            />

            <h5>RESTful API</h5>     
            <Progress
              percent={71}
              status="default"
              theme={{
                default: {
                  color: 'beige'
                }
              }}              
            />       

            <h5>React.js</h5>     
            <Progress
              percent={63}
              status="default"
              theme={{
                default: {
                  color: '#61dafb'
                }
              }}              
            />          

            <h5>Amazon Web Services</h5>     
            <Progress
              percent={80}
              status="default"
              theme={{
                default: {
                  color: '#f68d11'
                }
              }}                      
            />              
            
            <h5>Linux System Administration</h5>     
            <Progress
              percent={80}
              status="default"
              theme={{
                default: {
                  color: '#dd4814'
                }
              }}                 
            />       
            
            <h5>MySQL</h5>     
            <Progress
              percent={95}
              status="default"
              theme={{
                default: {
                  color: '#00618b'
                }
              }}                  
            />                 
            
            <h5>WordPress</h5>     
            <Progress
              percent={79}
              status="default"
              theme={{
                default: {
                  color: '#0087be'
                }
              }}                                
            />   

            <h5>Facebook Marketing</h5>     
            <Progress
              percent={92}
              status="default"
              theme={{
                default: {
                  color: '#3b579d'
                }
              }}                
            />   
          </Cell>
          
          <Cell col={5}>
            <h5>Photoshop</h5>
            <Progress
              type="circle"
              width={200}
              percent={86}              
            />          
            <h5>Illustrator</h5>
            <Progress
              type="circle"
              width={140}
              percent={58}
            />                      
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Skills;