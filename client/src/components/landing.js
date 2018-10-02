import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

class Landing extends Component {
  render() {

    const images = [
      {
        original: 'https://patsy.palmsolutions.co/img/slide1.jpg',
				thumbnail: 'https://patsy.palmsolutions.co/img/slide1.jpg',
      },
      {
        original: 'https://patsy.palmsolutions.co/img/slide2.jpg',
				thumbnail: 'https://patsy.palmsolutions.co/img/slide2.jpg'
			}
			,
      {
        original: 'https://patsy.palmsolutions.co/img/slide3.jpg',
				thumbnail: 'https://patsy.palmsolutions.co/img/slide3.jpg'
      }			
		]		

    return (
    	<div>
    		<Grid className="landing-grid">
    			<Cell col={12}>
						<h3>What I do</h3>
						<p>I'm a Software Engineer with 2 years of experience. Currently working as freelance developer and consultant.</p>
						
						<p>Most of my work revolves around programming, mostly backend using Node.js and Express in building FB Messenger bots and RESTful APIs.<br/>
						Though, in my early year I'm used to do user interface designs with Adobe Illustrator/Photoshop and CSS.<br/>
						Now I'm venturing in React.js which is great in making Realtime web applications</p>
						
						<p>Although most of my time are spent in building applications, I did client facing as well. In fact, my company has a strong focus on them.
						They believe<br/>that regular communication should be maintained. And acknowledging that you see them as a person more than a paycheck can go a long way.</p>

						<p>I have done projects with respective clients such as Asia Brewery Inc., Cloudfone, Kumon Philippines, and Pioneer Insurance.</p>

						<p>I use programs like Visual Studio, Sublime, Git, Postman, Photoshop & Illustrator.</p>
						<Cell col={6}>
						<ImageGallery items={images} showPlayButton={false} showThumbnails={false} autoPlay={true}/>
						</Cell>
    			</Cell>
    		</Grid>
    	</div>
    );
  }
}

export default Landing;