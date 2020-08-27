import React, { useState, useEffect } from 'react';

import { FaSearch } from 'react-icons/fa';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import Slider from '@material-ui/core/Slider';
import {
	InputLabel,
	FormControl,
	Select,
	MenuItem,
	Box,
	Input,
	InputAdornment,
	Button,
	IconButton,
	Tooltip,
} from '@material-ui/core';

// import vehicles from "../../ultils/mockupVehicles";
import getBiggestPrice from '../../ultils/getBiggestPrice';
import getBiggestYear from '../../ultils/getBiggestYear';
import getLowestYear from '../../ultils/getLowestYear';
import CardsContainer from '../../components/CardsContainer';
import { StyledStock } from './styles';
import firebase from '../../firebase';
import PreLoader from '../../components/PreLoader';
import HeaderPageComponent from '../../components/HeaderPageComponent';

const Stock = () => {
	const [toShowVehicles, setToShowVehicles] = useState([]);
	const [order, setOrder] = useState('');
	const [brand, setBrand] = useState('all');
	const [search, setSearch] = useState('');
	const [priceRange, setPriceRange] = React.useState([0, 50000]);
	const [yearRange, setYearRange] = React.useState([1980, 2021]);
	const [currentPage, setCurrentPage] = useState(1);
	const [vehiclesPerPage, setVehiclesPerPage] = useState(12);
	const [vehicles, setVehicles] = useState([]);
	const [loading, setLoading] = useState(true);

	const resetFilters = () => {
		setPriceRange([0, getBiggestPrice(vehicles)]);
		setYearRange([getLowestYear(vehicles), getBiggestYear(vehicles)]);
		setBrand('all');
	};

	useEffect(() => {
		filterVehicles();
	}, [brand, yearRange, priceRange]);

	useEffect(() => {
		firebase.app
			.ref('vehicles')
			.once('value')
			.then((snapshot) => {
				let vehicles = [];

				snapshot.forEach((childItem) => {
					vehicles.push({
						key: childItem.key,
						brand: childItem.val().brand,
						model: childItem.val().model,
						description: childItem.val().description,
						price: childItem.val().price,
						id: childItem.val().id,
						imgs: childItem.val().imgs,
						plate: childItem.val().plate,
						power: childItem.val().power,
						year: childItem.val().year,
					});
				});
				setVehicles(vehicles);

				//setVehicles(Object.values(snapshot.val()));
				setToShowVehicles(Object.values(snapshot.val()));
				setPriceRange([0, getBiggestPrice(vehicles)]);
				setYearRange([getLowestYear(vehicles), getBiggestYear(vehicles)]);
				setLoading(false);
			});
	}, []);

	useEffect(() => {
		setToShowVehicles(searching());
		// eslint-disable-next-line
	}, [search]);
	//

	const searching = () => {
		let filtered = [];
		if (!search) {
			filtered = vehicles;
		} else {
			filtered = vehicles.filter(
				(vehicle) =>
					vehicle.model.toUpperCase().includes(search.toUpperCase()) ||
					vehicle.brand.toUpperCase().includes(search.toUpperCase())
			);
		}
		return filtered;
	};

	useEffect(() => {
		orderVehicles();
		// eslint-disable-next-line
	}, [order]);

	let allBrands = vehicles.map((vehicle) => vehicle.brand);
	allBrands = allBrands.filter(function (este, i) {
		return allBrands.indexOf(este) === i;
	});

	const filterVehicles = () => {
		//let vehicles2 = [...vehicles];
		let vehicles2 = vehicles;

		vehicles2 = filterByBrand(brand, vehicles2);
		vehicles2 = filterMinYear(yearRange[0], vehicles2);
		vehicles2 = filterMaxYear(yearRange[1], vehicles2);
		vehicles2 = filterMinPrice(priceRange[0], vehicles2);
		vehicles2 = filterMaxPrice(priceRange[1], vehicles2);
		setToShowVehicles([...vehicles2]);
		setOrder('');
	};

	const filterByBrand = (brand, vehicles2) => {
		if (brand !== 'all') {
			vehicles2 = vehicles2.filter((vehicle) => vehicle.brand === brand);
		}
		return vehicles2;
	};

	const filterMinYear = (minYear, vehicles2) => {
		if (minYear > 0) {
			vehicles2 = vehicles2.filter((vehicle) => {
				return vehicle.year >= minYear;
			});
		}
		return vehicles2;
	};

	const filterMinPrice = (minPrice, vehicles2) => {
		vehicles2 = vehicles2.filter((vehicle) => vehicle.price >= minPrice);
		return vehicles2;
	};

	const filterMaxPrice = (maxPrice, vehicles2) => {
		if (maxPrice > 0) {
			vehicles2 = vehicles2.filter((vehicle) => vehicle.price <= maxPrice);
		}
		return vehicles2;
	};

	const filterMaxYear = (maxYear, vehicles2) => {
		if (maxYear > 0) {
			vehicles2 = vehicles2.filter((vehicle) => vehicle.year <= maxYear);
		}
		return vehicles2;
	};

	const orderVehicles = () => {
		let vehicles1 = toShowVehicles;
		switch (order) {
			case 1:
				vehicles1.sort((a, b) => {
					return a.year > b.year ? -1 : a.year < b.year ? 1 : 0;
				});
				break;
			case 2:
				vehicles1.sort((a, b) => {
					return a.year < b.year ? -1 : a.year > b.year ? 1 : 0;
				});
				break;
			case 3:
				vehicles1.sort((a, b) => {
					return a.price > b.price ? -1 : a.price < b.price ? 1 : 0;
				});
				break;
			case 4:
				vehicles1.sort((a, b) => {
					return a.price < b.price ? -1 : a.price > b.price ? 1 : 0;
				});
				break;
			default:
				break;
		}
		setToShowVehicles([...vehicles1]);
	};

	return (
		<StyledStock>
			{loading ? (
				<PreLoader />
			) : (
				<>
					<HeaderPageComponent title='Nosso Estoque' />
					<div>
						<Box
							border={1}
							borderColor='grey.500'
							borderRadius={16}
							component='nav'
							m={1}
						>
							<span id='filter-tag'>FILTROS</span>
							<div className='sub-container-filters'>
								<div>
									<InputLabel>Preço:</InputLabel>
									<Slider
										value={priceRange}
										onChange={(e, newValue) => {
											setPriceRange(newValue);
										}}
										valueLabelDisplay='auto'
										aria-labelledby='range-slider'
										max={getBiggestPrice(vehicles)}
									/>
								</div>
								<div>
									<InputLabel>Ano</InputLabel>
									<Slider
										value={yearRange}
										onChange={(e, newValue) => {
											setYearRange(newValue);
										}}
										valueLabelDisplay='auto'
										aria-labelledby='range-slider'
										min={getLowestYear(vehicles)}
										max={getBiggestYear(vehicles)}
									/>
								</div>
							</div>
							<div className='sub-container-filters'>
								<FormControl fullWidth>
									<InputLabel>Marca</InputLabel>

									<Select
										labelId='demo-simple-select-label'
										id='demo-simple-select'
										value={brand}
										onChange={(e) => setBrand(e.target.value)}
									>
										<MenuItem value='all'>Todas</MenuItem>
										{allBrands.map((b) => {
											return (
												<MenuItem value={b} key={b}>
													{b}
												</MenuItem>
											);
										})}
									</Select>
								</FormControl>

								<div>
									{vehicles.length !== toShowVehicles.length && (
										<Tooltip title='Resetar filtros'>
											<IconButton aria-label='delete' onClick={resetFilters}>
												<IoIosCloseCircleOutline />
											</IconButton>
										</Tooltip>
									)}
								</div>
							</div>
						</Box>

						<FormControl className='search-container'>
							<div>
								<InputLabel htmlFor='standard-adornment'>Pesquisar</InputLabel>
								<Input
									id='standard-adornment'
									type='text'
									value={search}
									onChange={(e) => setSearch(e.target.value)}
									endAdornment={
										<InputAdornment position='end'>
											<FaSearch color='#737373' />
										</InputAdornment>
									}
								/>
							</div>
						</FormControl>
					</div>
					<div className='order'>
						<FormControl>
							<InputLabel>Veiculos por página:</InputLabel>
							<Select
								labelId='demo-simple-select-label'
								id='demo-simple-select'
								value={vehiclesPerPage}
								onChange={(e) => setVehiclesPerPage(e.target.value)}
							>
								<MenuItem value={8}>8</MenuItem>
								<MenuItem value={12}>12</MenuItem>
								<MenuItem value={20}>20</MenuItem>
								<MenuItem value={24}>24</MenuItem>
							</Select>
						</FormControl>

						<FormControl>
							<InputLabel>Ordenar por:</InputLabel>
							<Select
								labelId='demo-simple-select-label'
								id='demo-simple-select'
								value={order}
								onChange={(e) => setOrder(e.target.value)}
							>
								<MenuItem value={3}>Maior preço</MenuItem>
								<MenuItem value={4}>Menor preço</MenuItem>
								<MenuItem value={1}>Maior ano</MenuItem>
								<MenuItem value={2}>Menor ano</MenuItem>
							</Select>
						</FormControl>
					</div>
					<CardsContainer
						vehicles={toShowVehicles}
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
						vehiclesPerPage={vehiclesPerPage}
					/>
				</>
			)}
		</StyledStock>
	);
};

export default Stock;
