import styled, { css } from 'styled-components';
import ReactSelect from 'react-select';
import { Link } from 'react-router-dom';

// NAVBAR
export const NavTitle = styled.div`
	font-size: 2em;
	font-weight: bold;
	font-style: italic;
	color: black;
	/* background-color: LightSteelBlue; */

	display: flex;
	flex: 0;
	flex-basis: auto;
`;

export const NavBarSection = styled.nav`
	display: flex;
	align-items: center;
	padding: 10px 5%;
	background-color: Gainsboro;
`;

export const UlList = styled.ul`
	display: flex;
	justify-content: flex-end;
	flex: 1;
	/* background-color: red; */
`;

export const LiListItem = styled.li`
	list-style-type: none;
	padding: 0px 10px;
	/* background-color: blue; */
`;

export const StyledLink = styled(Link)`
	text-decoration: none;
	color: black;
	transition: all 0.3s ease 0s;

	&:visited {
		color:black;
	}

	&:hover{
		color: Grey;
	}
`;

export const Anchor = styled.a`
	/* background-color: black; */
	padding: 0 0 0 20px;
`;

////
//
export const Wrapper = styled.div`
	padding: 5px;
	margin: auto;
	width: 700px;
	/* background-color: lightsteelblue; */
`;

export const InputGroup = styled.div`
	display: flex;
	padding: 2.5px;
	flex: 1 100%;
	/* background-color: lightgreen; */
`;

export const Header = styled.header`
	margin: auto;
	width: 50%;
	padding: 20px 0px 10px 0px;

	/* background-color: lightyellow; */
`;

export const Paragraph = styled.p`
	font-weight: lighter;
	font-size: 2.5em;
	/* background-color: red; */
`;

export const InputLabel = styled.label`
	/* background-color: lightsalmon; */
	width: 90px;
	height: 38px;
	margin: 4px 0px 4px 0px;
	padding: 4px 4px 4px 4px;
	line-height: 25px;
	font-weight: bold;
`;

export const InputControl = styled.input`
	/* background-color: red; */
	border: 1px solid lightgrey;
	margin: 4px 4px 4px 4px;
	padding: 4px 4px 4px 4px;

	${(props) => props.styleFlex === 'flex_5' && css`flex: 5;`};
	${(props) => props.styleFlex === 'flex_2' && css`flex: 2;`};
`;

////
export const Dropdown = styled(ReactSelect)`
	flex: 5;
	margin: 4px;
	/* background-color: red; */
`;

////
// list events & saved filters
export const Container = styled.div`
	/* background-color: yellow; */
	padding: 30px 0 0 0;
	margin: auto;
	width: 675px;
`;

export const ListContainer = styled.div`
	/* background-color: green; */
	padding: 5px 5px 5px 5px;
	margin: 0px 0px 15px 0px;

	${(props) =>
		props.styleSavedFilters === 'ListContainer' &&
		css`
			width: 337px;
			margin: auto;
		`};
`;

export const ListWrapper = styled.li`
	/* background-color: red; */
	display: flex;
	flex-flow: column;
	${(props) =>
		props.styleSavedFilters === 'ListWrapper' &&
		css`
			border: 1px solid lightgrey;
			border-radius: 5px;
		`};
`;

// list events
export const DateDiv = styled.div`
	/* background-color: yellow; */
	display: flex;
	flex: 4;
	align-items: left;
	padding: 0px 0px 10px 70px;
`;

export const DateDate = styled.div`
	font-weight: bold;
	font-size: large;
`;

export const RestDiv = styled.div`
	/* background-color: lightcoral; */
	display: flex;
	border: 1px solid lightgrey;
	border-radius: 5px;
	padding: 5px;
`;

export const TimeDiv = styled.div`
	/* background-color: lightpink; */
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const Time = styled.div`
	/* background-color:blue; */

	${(props) => props.styleListEvents === 'timeStart' && css`padding: 0px 0px 7px 0px;`} font-style: italic;
	${(props) => props.styleListEvents === 'timeEnd' && css`padding: 7px 0px 0px 0px;`} font-weight: normal;
`;

export const NameCityTopicDiv = styled.div`
	/* background-color: lightsteelblue; */
	flex: 5;
	padding: 5px 0px 5px 25px;
`;

export const Name = styled.div`
	/* background-color: lightsalmon; */
	display: flex;
	justify-content: flex-start;
`;

export const City = styled.div`
	display: flex;
	justify-content: flex-start;
	font-weight: bold;
	font-size: large;
	line-height: 35px;
`;

export const TopicList = styled.div`
	/* background-color: red; */
	display: flex;
	justify-content: flex-start;
	padding: 5px 0 0 0;
`;

export const TopicItem = styled.div`
	/* background-color: red; */
	padding: 0px 5px 0px 5px;

	&:last-child {
		/* background: lightgreen; */
		padding: 0px 0px 0px 5px;
	}

	&:first-child {
		/* background: yellow; */
		padding: 0px 5px 0px 0px;
	}

	&:only-child {
		/* background: lightskyblue; */
		padding: 0px;
	}
`;

export const Topic = styled.div`
	/* background-color: pink; */
	font-weight: lighter;
`;

// Saved filters
export const Fields = styled.div`display: flex;`;

export const NameDiv = styled.div`
	/* background-color: lightpink; */
	flex: 1;
	display: flex;
	justify-content: flex-end;
`;

export const NameFilter = styled.div`
	font-weight: bold;
	padding: 2px 5px 2px 0;
`;

export const ValueDiv = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-start;
`;

export const ValueFilter = styled.div`
	padding: 2px 0 2px 5px;
	font-weight: lighter;
`;

// app
export const AppStyle = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
`;
