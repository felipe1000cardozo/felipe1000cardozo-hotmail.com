import React, { useEffect, useState, Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import firebase from '../../firebase';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import PreLoader from '../../components/PreLoader';
import VehiclesListComponent from '../../components/VehiclesListComponent';
import { StyledAdminPainel, FormContainer, AddPhotosButton } from './styles';
import { RiStore3Line } from 'react-icons/ri';
import { MdAddAPhoto } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Tooltip, CircularProgress } from '@material-ui/core';

const defaultVehicle = {
	id: '',
	model: '',
	brand: '',
	price: '',
	year: '',
	km: '',
	power: '',
	description: '',
	plate: '',
	imgs: [],
};

const AdminPainel = ({ history }) => {
	const [vehicles, setVehicles] = useState({});
	const [newVehicle, setNewVehicle] = useState(defaultVehicle);
	const [loading, setLoading] = useState(true);
	const [newImgs, setNewImgs] = useState([]);
	const [uploadImgProgress, setUploadImgProgress] = useState(null);

	useEffect(() => {
		firebase.app.ref('vehicles').on('value', (snapshot) => {
			console.log(typeof Object.values(snapshot.val()));
			setVehicles(Object.values(snapshot.val()));
			setLoading(false);
		});
	}, []);

	async function logout() {
		await firebase.logout().catch((error) => console.log(error));
		history.push('/');
	}

	useEffect(() => {
		setNewVehicle((prevState) => ({ ...prevState, id: vehicles.length + 1 }));
	}, [vehicles]);

	const registerNewVehicle = async (event) => {
		event.preventDefault();

		let vehiclesDb = firebase.app.ref('vehicles');
		let key = vehiclesDb.push().key;
		console.log('key:' + key);
		setNewVehicle((prevState) => ({
			...prevState,
			id: key,
		}));
		await vehiclesDb.child(key).set({ ...newVehicle, id: key });
		setNewVehicle(defaultVehicle);
	};

	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const uploadPhoto = async (e) => {
		if (e.target.files[0]) {
			const image = e.target.files[0];

			if (image.type === 'image/png' || image.type === 'image/jpeg') {
				setNewImgs((prevState) => [
					...prevState,
					...Object.values(e.target.files),
				]);
			} else {
				alert('Envie uma imagem do tipo PNG ou JPEG');
				return null;
			}
		}
	};

	useEffect(() => {
		if (newImgs.length) {
			handleUpload();
		}
		// eslint-disable-next-line
	}, [newImgs]);

	const handleUpload = async () => {
		const uploadTaks = firebase.storage
			.ref(
				`imagesVehicles/${newVehicle.id}/${newImgs[newImgs.length - 1].name}`
			)
			.put(newImgs[newImgs.length - 1]);

		await uploadTaks.on(
			'state_changed',
			(snapshot) => {
				//progress
				const progress = Math.round(
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100
				);
				setUploadImgProgress(progress);
			},
			(error) => {
				//error
				console.log('Error imagem: ' + error);
			},
			() => {
				//sucessO!
				firebase.storage
					.ref(`imagesVehicles/${vehicles.length + 1}`)
					.child(newImgs[newImgs.length - 1].name)
					.getDownloadURL()
					.then((url) => {
						setNewVehicle((prevState) => ({
							...prevState,
							imgs: [...prevState.imgs, url],
						}));
					});
				setUploadImgProgress(null);
			}
		);
	};

	return (
		<Fragment>
			{loading ? (
				<PreLoader />
			) : (
				<StyledAdminPainel>
					<div className='container-buttons'>
						<div>
							<Link to='/' target='blank'>
								<Tooltip title='Abrir página da loja' placement='left'>
									<Button
										id='background-green'
										variant='contained'
										color='secondary'
									>
										<RiStore3Line size='24' />
									</Button>
								</Tooltip>
							</Link>
							<Button
								variant='contained'
								color='primary'
								onClick={handleClickOpen}
								className='h-100'
							>
								Adicionar novo veiculo
							</Button>
						</div>

						<Dialog
							open={open}
							onClose={handleClose}
							aria-labelledby='form-dialog-title'
						>
							<DialogTitle id='form-dialog-title'>
								Adicionar novo veiculo
							</DialogTitle>

							<DialogContent>
								<FormContainer onSubmit={(event) => registerNewVehicle(event)}>
									<div id='container-simple-inputs'>
										<div>
											<TextField
												label='Modelo'
												placeholder='Modelo'
												value={newVehicle.model}
												onChange={(event) => {
													setNewVehicle({
														...newVehicle,
														model: event.target.value,
													});
												}}
											/>
											<TextField
												label='Ano'
												placeholder='Ano'
												type='number'
												value={newVehicle.year}
												onChange={(event) => {
													setNewVehicle({
														...newVehicle,
														year: event.target.value,
													});
												}}
											/>
											<TextField
												label='Preço'
												placeholder='Preço'
												type='number'
												value={newVehicle.price}
												onChange={(event) => {
													setNewVehicle({
														...newVehicle,
														price: Number(event.target.value),
													});
												}}
											/>
											<TextField
												label='Potência (cc)'
												placeholder='Potência (cc)'
												type='number'
												value={newVehicle.power}
												onChange={(event) => {
													setNewVehicle({
														...newVehicle,
														power: Number(event.target.value),
													});
												}}
											/>
										</div>
										<div>
											<TextField
												label='Marca'
												placeholder='Marca'
												value={newVehicle.brand}
												onChange={(event) => {
													setNewVehicle({
														...newVehicle,
														brand: event.target.value,
													});
												}}
											/>
											<TextField
												label='Kilometragem'
												placeholder='Kilometragem'
												type='number'
												value={newVehicle.km}
												onChange={(event) => {
													setNewVehicle({
														...newVehicle,
														km: Number(event.target.value),
													});
												}}
											/>
											<TextField
												label='Placa'
												placeholder='Placa'
												value={newVehicle.plate}
												onChange={(event) => {
													setNewVehicle({
														...newVehicle,
														plate: event.target.value,
													});
												}}
											/>
										</div>
									</div>
									<div className='description-input-container'>
										<TextField
											label='Descrição'
											multiline
											value={newVehicle.description}
											fullWidth
											rows={3}
											defaultValue='descrição'
											variant='outlined'
											onChange={(event) => {
												setNewVehicle({
													...newVehicle,
													description: event.target.value,
												});
											}}
										/>
									</div>
									<div className='add-photos-container'>
										<p>Fotos</p>
										<div className='photos-container'>
											{newVehicle.imgs.map((vehicleImg) => (
												<img src={vehicleImg} alt='veículo' />
											))}

											{uploadImgProgress !== null ? (
												<div className='uploading'>
													<CircularProgress />
												</div>
											) : (
												<Tooltip title='Adicionar foto' placement='top'>
													<AddPhotosButton for='upload-photo-input'>
														<input
															type='file'
															name='upload-photo-input'
															id='upload-photo-input'
															accept='image/png, image/jpeg'
															onChange={uploadPhoto}
														/>
														<MdAddAPhoto size='35' />
														<p>Somente JPG ou PNG</p>
													</AddPhotosButton>
												</Tooltip>
											)}
										</div>
									</div>

									<DialogActions>
										<Button
											variant='contained'
											size='small'
											color='secondary'
											onClick={handleClose}
										>
											Cancelar
										</Button>
										<Button
											variant='contained'
											size='small'
											color='primary'
											type='submit'
											onClick={handleClose}
											disabled={uploadImgProgress}
										>
											Cadastrar
										</Button>
									</DialogActions>
								</FormContainer>
							</DialogContent>
						</Dialog>

						<Button
							variant='contained'
							color='secondary'
							onClick={() => logout()}
						>
							Sair
						</Button>
					</div>
					<VehiclesListComponent vehicles={vehicles} />
				</StyledAdminPainel>
			)}
		</Fragment>
	);
};

export default AdminPainel;
