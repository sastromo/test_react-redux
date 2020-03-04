import React from 'react';
import styled, { css } from 'styled-components';

//CSS
const ButtonStyle = styled.button`
	width: 95px;
	padding: 2px 4px;
	margin: 5px 5px 5px 5px;
	/* background-color: green; */

	border: none;
	border-radius: 3px;
	cursor: pointer;

	font-size: 1em;

	transition: all 0.2s ease 0s;
	color: black;
	background-color: LightGrey;
	&:hover {
		background-color: silver;
	}

	${(props) =>
		props.buttonType === 'github' &&
		css`
			background-color: LightSeaGreen;
			color: white;
			font-size: large;

			&:hover {
				background-color: MediumTurquoise;
				color: black;
			}
		`}

	${(props) =>
			props.buttonType === 'disable' &&
			css`
				background-color: #e0e0e0;

				color: #b2b2b2;

				cursor: not-allowed;
				&:hover {
					background-color: #e0e0e0;
					color: #b2b2b2;
				}
			`}

	${(props) =>
			props.buttonType === 'delete' &&
			css`
				background-color: LightCoral;
				color: white;
				&:hover {
					background-color: OrangeRed;
				}
			`}

	${(props) =>
			props.buttonType === 'test' &&
			css`
				background-color: blue;
				color: green;
				&:hover {
					background-color: yellow;
				}
			`}

	${(props) => props.buttonType === 'selectRequired' && css`background: red;`};
`;

const Button = (props) => {
	return (
		<ButtonStyle
			buttonType={props.buttonType}
			type={props.type}
			className={props.variant}
			onClick={props.onClick}
			disabled={props.disableButton}
		>
			{props.children}
		</ButtonStyle>
	);
};

export default Button;
