import styled from 'styled-components';

export const Main = styled.div`
	max-width: 1100px;
	height: 400px;
	margin: 20px 20px 50px 20px;

	display: flex;
	.iframe-infos {
		width: 100%;
		height: 100%;
		border: none;
	}

	@media (max-width: 768px) {
		margin: 0;
	}
`;
