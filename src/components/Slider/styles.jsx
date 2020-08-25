import styled from 'styled-components';

const SliderStyled = styled.div`
	color: var(--primary-color);
	position: relative;
	height: 420px;
	background-color: var(--four-color);
	img {
		width: 100%;
		height: 420px;
		position: absolute;
	}
	.arrowLeft,
	.arrowRight,
	.subtitle,
	.dots-container {
		position: absolute;
		z-index: 1;
	}
	.arrowLeft,
	.arrowRight {
		cursor: pointer;
		opacity: 0;

		:hover {
			transition: 0.5s;
			opacity: 1;
		}
	}
	.arrowLeft {
		display: flex;
		height: 100%;
		align-items: center;
		left: 0px;
		padding: 0 80px 0 56px;
		background: rgb(255, 255, 255);
		background: linear-gradient(
			90deg,
			rgba(0, 0, 0, 0.6) 0%,
			rgba(255, 255, 255, 0) 100%
		);
	}
	.arrowRight {
		display: flex;
		height: 100%;
		align-items: center;
		right: 0px;
		padding: 0 56px 0 80px;
		background: rgb(255, 255, 255);
		background: linear-gradient(
			90deg,
			rgba(255, 255, 255, 0) 0%,
			rgba(0, 0, 0, 0.6) 100%
		);
	}
	.dots-container {
		display: flex;
		justify-content: center;
		width: 100%;
		bottom: 22px;
	}
	.subtitle {
		display: flex;
		justify-content: center;
		width: 100%;
		bottom: 56px;
	}
`;

export { SliderStyled };
