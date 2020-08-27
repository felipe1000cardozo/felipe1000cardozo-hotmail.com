import React from 'react';
import { MainAbout } from './styles';
import { Link } from 'react-router-dom';
import HeaderPageComponent from '../../components/HeaderPageComponent';
import Button from '@material-ui/core/Button';

const About = () => {
	return (
		<MainAbout>
			<HeaderPageComponent title='Conheça nossa historia' />
			<div className='about-infos'>
				<h2>Empresa Fulano de tal</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ex
					deleniti nobis a, nulla necessitatibus neque, rerum non itaque hic
					maiores! Praesentium cumque vero architecto molestiae vel, animi iure
					eaque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
					ex deleniti nobis a, nulla necessitatibus neque, rerum non itaque hic
					maiores! Praesentium cumque vero architecto molestiae vel, animi iure
					eaque?
				</p>
			</div>
			<img
				src='https://cdn.sitewebmotors.com.br/uploads/userGallery/5ba412b2cc77e.jpeg'
				alt='Imagem empresa'
			/>
			<div className='button-container'>
				<Link to='/contact'>
					<Button className='button-about' variant='contained'>
						Entre em contato
					</Button>
				</Link>
			</div>
		</MainAbout>
	);
};

export default About;
