import React, { Fragment } from 'react';
import { deleteCustomFilter } from '../../actions/filterActions';

import Button from '../commonComponents/Button';

//REDUX
import { useDispatch, useSelector } from 'react-redux';

//css
import {
	Header,
	Paragraph,
	Container,
	ListContainer,
	ListWrapper,
	Fields,
	NameDiv,
	NameFilter,
	ValueDiv,
	ValueFilter
} from '../../style/styles';

const SavedFilters = () => {
	const stateCustomFilterArray = useSelector((state) => state.filterState.customFilters);
	const dispatch = useDispatch();

	return (
		<Fragment>
			<Header>
				<Paragraph>Saved Filters</Paragraph>
			</Header>
			<Container>
				{stateCustomFilterArray.map((customFiltersValue) => (
					<ListContainer styleSavedFilters='ListContainer' key={customFiltersValue.id}>
						<ListWrapper styleSavedFilters='ListWrapper'>
							<Fields>
								{customFiltersValue.city === '' ? null : (
									<Fragment>
										<NameDiv>
											<NameFilter>City:</NameFilter>
										</NameDiv>
										<ValueDiv>
											<ValueFilter>{customFiltersValue.city}</ValueFilter>
										</ValueDiv>
									</Fragment>
								)}
							</Fields>
							<Fields>
								{customFiltersValue.date === '' ? null : (
									<Fragment>
										<NameDiv>
											<NameFilter>Date:</NameFilter>
										</NameDiv>
										<ValueDiv>
											<ValueFilter>{customFiltersValue.date}</ValueFilter>
										</ValueDiv>
									</Fragment>
								)}
							</Fields>
							<Fields>
								{customFiltersValue.time_start === '' ? null : (
									<Fragment>
										<NameDiv>
											<NameFilter>Time start:</NameFilter>
										</NameDiv>
										<ValueDiv>
											<ValueFilter>{customFiltersValue.time_start}</ValueFilter>
										</ValueDiv>
									</Fragment>
								)}
							</Fields>
							<Fields>
								{customFiltersValue.topic === '' ? null : (
									<Fragment>
										<NameDiv>
											<NameFilter>Topic:</NameFilter>
										</NameDiv>
										<ValueDiv>
											<ValueFilter>{customFiltersValue.topic}</ValueFilter>
										</ValueDiv>
									</Fragment>
								)}
							</Fields>
						</ListWrapper>
						{/* TODO:  view saved event [NOT A PRIORITY] */}
						<Button
							buttonType='delete'
							onClick={(id) => dispatch(deleteCustomFilter(customFiltersValue.id))}
						>
							Delete
						</Button>
					</ListContainer>
				))}
			</Container>
		</Fragment>
	);
};

export default SavedFilters;
