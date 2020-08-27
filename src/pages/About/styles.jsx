import styled from 'styled-components';

export const MainAbout = styled.div`
	max-width: 1114px;
	background-color: var(--four-color);
	
	.about-infos {
		background-color: var(--background-color);
		height: 250px;
		align-items:center;
		display: flex;
		flex-direction: column;
		padding:30px 15px;
		h2{
			margin-bottom: 15px;
			font-weight:400;
		}
		p{
			color: var(--third-color)
		}
	}
	
	}
	img {
		width: 100%;
	}
	.button-container{
		display: flex;
		justify-content:center;
		margin: 15px;
		.button-about{
			background-color: var(--secoundary-color);
			color: var(--four-color)
		}
	}
`;
