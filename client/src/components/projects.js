import React, { Component } from 'react';
import { Tabs, Tab, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import { Container, Row, Col } from 'react-grid-system';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

import ScrollAnimation from 'react-animate-on-scroll';

const images = [
	{
		original: 'https://patsy.palmsolutions.co/img/psd_2_1.jpg',
		thumbnail: 'https://patsy.palmsolutions.co/img/psd_2_1.jpg',
	},
	{
		original: 'https://patsy.palmsolutions.co/img/psd_2_2.jpg',
		thumbnail: 'https://patsy.palmsolutions.co/img/psd_2_2.jpg'
	},
	{
		original: 'https://patsy.palmsolutions.co/img/psd_2_3.jpg',
		thumbnail: 'https://patsy.palmsolutions.co/img/psd_2_3.jpg'
	},
	{
		original: 'https://patsy.palmsolutions.co/img/psd_2_4.jpg',
		thumbnail: 'https://patsy.palmsolutions.co/img/psd_2_4.jpg'
	},
	{
		original: 'https://patsy.palmsolutions.co/img/psd_2_5.jpg',
		thumbnail: 'https://patsy.palmsolutions.co/img/psd_2_5.jpg'
	}									
]		

const images2 = [
	{
		original: 'https://patsy.palmsolutions.co/img/psd_1_1.jpg',
		thumbnail: 'https://patsy.palmsolutions.co/img/psd_1_1.jpg',
	},
	{
		original: 'https://patsy.palmsolutions.co/img/psd_1_2.jpg',
		thumbnail: 'https://patsy.palmsolutions.co/img/psd_1_2.jpg'
	},
	{
		original: 'https://patsy.palmsolutions.co/img/psd_1_3.jpg',
		thumbnail: 'https://patsy.palmsolutions.co/img/psd_1_3.jpg'
	},
	{
		original: 'https://patsy.palmsolutions.co/img/psd_1_4.jpg',
		thumbnail: 'https://patsy.palmsolutions.co/img/psd_1_4.jpg'
	},
	{
		original: 'https://patsy.palmsolutions.co/img/psd_1_5.jpg',
		thumbnail: 'https://patsy.palmsolutions.co/img/psd_1_5.jpg'
	},
	{
		original: 'https://patsy.palmsolutions.co/img/psd_1_6.jpg',
		thumbnail: 'https://patsy.palmsolutions.co/img/psd_1_6.jpg'
	}																		
]		

class Projects extends Component {
  constructor(props){
  	super(props);
  	this.state = { activeTab: 0 }
	}

  toggleCategories(){
  	if(this.state.activeTab === 0){
  	  return( 	  			
		  	  	<Container>
					<br/>
					<Row>
						<Col sm={6}>
							<ImageGallery items={images} showPlayButton={false} showThumbnails={false} autoPlay={true}/>
						</Col>
						<Col sm={6}>
							<div className="psd-desc-r">
							<ScrollAnimation
							animateIn='bounceInRight'
							animateOut='bounceOutLeft'
							>							
								<h3>
									A Journal/Diary App that keeps track your day to day thoughts and actions. It will also ask users to answer surveys so the app should notify the user if there is an available survey to answer.
								</h3>		
							</ScrollAnimation>					 
							</div>
						</Col>
					</Row>							
					<Row>							
						<Col sm={6}>						
							<ScrollAnimation
								animateIn='bounceInLeft'
								animateOut='bounceOutRight'
								delay={800}  className="psd-desc-l">																						
								<h3>
									A Wifi Monitoring Dashboard that tracks overall users across sites with demographics and interactive charts
								</h3>							 														
							</ScrollAnimation>
						</Col>
																	
						<Col sm={6}>
							<ImageGallery items={images2} showPlayButton={false} showThumbnails={false} autoPlay={true}/>						
						</Col>	
					</Row>
				</Container>
  	  )
  	} else if(this.state.activeTab === 1){
  	  return(
			  <ScrollAnimation
				animateIn='fadeIn'
	  		  >			
				<Container>
					<br/>
					<Row>
						<Col sm={4} className="card-holder">
							<Card shadow={1}>
								<CardTitle style={{height: '176px', background:'url(https://patsy.palmsolutions.co/img/abi.jpg) center / cover'}}/>
								<CardText>
									<strong>ABI Messenger Bot</strong>
									<p>Ecommerce chatbot for Asia Brewery merchandises.</p>
								</CardText>  	  	    
								<CardActions border>
									<Button colored href="https://m.me/252054432276683" target="_blank">Live Demo</Button>				
								</CardActions>
							</Card>
						</Col>
						<Col sm={4} className="card-holder">
							<Card shadow={1}>
								<CardTitle style={{height: '176px', background:'url(https://patsy.palmsolutions.co/img/kumon.jpg) center / cover'}}/>
								<CardText>
									<strong>Kumon PH Messenger Bot</strong>
									<p>Customer support chatbot with location inquiry enabled</p>
								</CardText>  	  	    
								<CardActions border>
									<Button colored href="https://m.me/kumonphilippinesofficial" target="_blank">Live Demo</Button>				
								</CardActions>
							</Card>	  
						</Col>
						<Col sm={4} className="card-holder">
							<Card shadow={1}>
								<CardTitle style={{height: '176px', background:'url(https://patsy.palmsolutions.co/img/cf.jpg) center / cover'}}/>
								<CardText>
									<strong>Cloudfone Messenger Bot</strong>
									<p>Customer support chatbot with AI for more custom messaging.</p>
								</CardText>  	  	    
								<CardActions border>
									<Button colored href="https://m.me/cloudfone" target="_blank">Live Demo</Button>				
								</CardActions>
							</Card>	  
						</Col>								  		  	  
					</Row>
				</Container>
			  </ScrollAnimation>
  	  )
  	} else if(this.state.activeTab === 2){
  	  return(
			<ScrollAnimation
			animateIn='fadeIn'
			>	
		  	  	<Container>
					<br/>
					<Row>
						<Col sm={6}>
							<Card shadow={0} style={{width: '512px', margin: 'auto'}}>
									<CardTitle style={{color: '#fff', height: '176px', background: 'url(https://patsy.palmsolutions.co/img/ikomai1.jpg) center / cover'}}>
										IKOMAI & TOCHI
									</CardTitle>
									<CardText>
										IKOMAI is a collaboration of Chef James Antolin and Nagoya Chef Hide, serving progressive Japanese street and comfort food. The premium casual concept is an extension of their Saturday Salcedo market stall of the same name, which means “Let’s Go” in Japanese.
									</CardText>
									<CardActions border>
											<Button colored href="http://ikomai.today" target="_blank">Live Demo</Button>
									</CardActions>
							</Card>						
						</Col>
						<Col sm={6}>
							<Card shadow={0} style={{width: '512px', margin: 'auto'}}>
									<CardTitle style={{color: '#fff', height: '176px', background: 'url(https://patsy.palmsolutions.co/img/ekonek.jpg) top / cover'}}>
										EKONEK
									</CardTitle>
									<CardText>
									E-Konek Pilipinas (E-Konek) is an IT service provider in the Philippines offering SaaS and turnkey solutions for the Lina Group of Companies and government agencies handling imports, exports, trade, and customs.
									</CardText>
									<CardActions border>
											<Button colored href="http://ekonek.000webhostapp.com" target="_blank">Live Demo</Button>
									</CardActions>
							</Card>												
						</Col>
					</Row>
				</Container>
			</ScrollAnimation>
  	  )
  	} else if(this.state.activeTab === 3){
  	  return(
		<Container>
			<Row>
				<h2>To be updated soon</h2>
			</Row>
		</Container>
  	  )
  	}
  }

  render() {
		
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
					<Tab>PSD</Tab>
					<Tab>Node.js</Tab>        
					<Tab>Web</Tab>       
					<Tab>Other Projects</Tab>       					
        </Tabs>

        <div>{this.toggleCategories()}</div>

   	  </div>
    );
  }
}

export default Projects;























