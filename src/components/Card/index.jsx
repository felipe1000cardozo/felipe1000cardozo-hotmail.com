import React, { memo, useEffect } from 'react';
import { CarCard, Image, CardInfos, Price } from './styles';
import { Link } from 'react-router-dom';
import ButtonComponent from '../ButtonComponent';
import priceMask from '../../ultils/priceMask';

const Card = ({ vehicle }) => {
	const { id, model, imgs, brand, year, km, price } = vehicle;
	const noImgUrl =
		'https://valordoconhecimento.fbitsstatic.net/img/p/produto-nao-possui-foto-no-momento/sem-foto.jpg?w=420&h=420&v=no-change';

	return (
		<CarCard key={id}>
			<h3>{model}</h3>
			<Image>
				{imgs && <img src={imgs[0] === '' ? noImgUrl : imgs[0]} alt='MOTO' />}
			</Image>
			<CardInfos>
				<p>Marca: {brand}</p>
				<p>Ano: {year}</p>
				<p>KM: {km}</p>
			</CardInfos>
			<Price> {priceMask(price)} </Price>

			<Link to={`/stock/${id}`}>
				<ButtonComponent value='Ver Mais' />
			</Link>
		</CarCard>
	);
};

export default memo(Card);
