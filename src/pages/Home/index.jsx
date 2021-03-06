import React, { Fragment, useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';

import Slider from '../../components/Slider';
import Card from '../../components/Card';

import AboutComponent from '../../components/AboutComponent';
import { Cards } from './styles';

import firebase from '../../firebase';
import { Link } from 'react-router-dom';
import PreLoader from '../../components/PreLoader';

const Home = () => {
	const [vehicles, setVehicles] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		firebase.app.ref('vehicles').once('value', (snapshot) => {
			let fourVehicles = [];

			for (let i = 0; i <= 3; i++) {
				fourVehicles[i] = snapshot.val()[i];
			}
			setVehicles(fourVehicles);
			setLoading(false);
		});
	}, []);

	return (
		<Fragment>
			<Slider />
			{loading ? (
				<PreLoader />
			) : (
				<Cards>
					{vehicles.map((vehicle) => {
						return <Card vehicle={vehicle} key={vehicle.id} />;
					})}
					<div className='button-container'>
						<Link to='/stock'>
							<Button className='button-home' variant='contained'>
								VER MAIS
							</Button>
						</Link>
					</div>
				</Cards>
			)}

			<AboutComponent />
		</Fragment>
	);
};

export default Home;
