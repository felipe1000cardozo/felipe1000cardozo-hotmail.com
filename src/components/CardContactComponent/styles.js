import styled from 'styled-components';

export const MainCardContact = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	margin: 20px;
	margin-bottom: 50px;

	.card-infos {
		width: 33%;
		display: flex;
		flex-direction: column;
		align-items: center;
		h4 {
			color: var(--secoundary-color);
			margin-bottom: 20px;
		}
		p {
			margin-bottom: 10px;
			color: var(--third-color);
		}
		a {
			text-decoration: none;
			color: #000;
		}
	}

	@media screen and (max-width: 767px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		.card-infos {
			margin-bottom: 50px;
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			p {
				text-align: center;
			}
		}
	}
`;
