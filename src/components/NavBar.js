import React from 'react';
import Button from './commonComponents/Button';

//css
import { NavTitle, NavBarSection, UlList, LiListItem, StyledLink, Anchor } from '../style/styles';

const NavBar = () => {
	return (
		<NavBarSection>
			<NavTitle>Meet Events</NavTitle>
			<UlList>
				<LiListItem>
					<StyledLink to='/'>Events</StyledLink>
				</LiListItem>
				<LiListItem>
					<StyledLink to='/addEvents'>Add Event</StyledLink>
				</LiListItem>
				<LiListItem>
					<StyledLink to='/savedFilters'>Filters</StyledLink>
				</LiListItem>
			</UlList>
			<Anchor href='https://github.com/sastromo'>
				<Button buttonType='github'>github</Button>
			</Anchor>
		</NavBarSection>
	);
};
export default NavBar;
