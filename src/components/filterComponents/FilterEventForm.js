import React, { Fragment } from 'react';
import Button from '../commonComponents/Button';

//REDUX
import { useSelector } from 'react-redux';

//css
import { Wrapper, InputGroup, Header, Paragraph, InputLabel, InputControl, Dropdown } from '../../style/styles';

const FilterEventForm = ({
	onSubmitSaveCustomFilter,
	cleanFilterInputs,
	//
	inputCityFilterValue,
	filterByCity,
	//
	inputDateFilterValue,
	filterByDate,
	//
	inputTimeFilterValue,
	filterByTime,
	//
	filterByTopic
}) => {
	const disableSaveFiltersButton = useSelector((state) => state.filterState.disableSaveFiltersButton);
	const inputSelectedTopicValue = useSelector((state) => state.eventState.inputSelectedTopicValue);
	const stateArray = useSelector((state) => state.eventState);

	//TODO: CHECK IF INPUT VALUES ARE not (empty spaces) .trim() [NOT A PRIORITY]

	return (
		<Fragment>
			<Header>
				<Paragraph>Events</Paragraph>
			</Header>
			<Wrapper>
				<form onSubmit={onSubmitSaveCustomFilter}>
					<InputGroup>
						<InputLabel>City</InputLabel>
						<InputControl
							type='text'
							value={inputCityFilterValue}
							name='cityFilter'
							title='City:'
							required={false}
							onChange={filterByCity}
							styleFlex='flex_5'
						/>
					</InputGroup>

					<InputGroup>
						<InputLabel>Date</InputLabel>
						<InputControl
							type='date'
							value={inputDateFilterValue.split('/').reverse().join('-')}
							name='dateFilter'
							title='Date:'
							required={false}
							onChange={filterByDate}
							styleFlex='flex_2'
						/>

						<InputLabel>Time Start</InputLabel>
						<InputControl
							type='time'
							value={inputTimeFilterValue}
							title='Time Start:'
							name='timeFilter'
							required={false}
							onChange={filterByTime}
							styleFlex='flex_2'
						/>
					</InputGroup>

					<InputGroup>
						<InputLabel>Topics</InputLabel>
						<Dropdown
							name='topics'
							isClearable
							value={inputSelectedTopicValue.value}
							options={stateArray.topicNames}
							onChange={filterByTopic}
							theme={(theme) => ({
								...theme,
								borderRadius: 0
							})}
						/>
					</InputGroup>

					<Button
						onClick={() => {
							cleanFilterInputs();
						}}
					>
						Clear Fields
					</Button>

					{disableSaveFiltersButton ? (
						<Button type='submit' buttonType='disable' disableButton={true}>
							Save Filter
						</Button>
					) : (
						<Button type='submit'>Save filter</Button>
					)}
				</form>
			</Wrapper>
		</Fragment>
	);
};

export default FilterEventForm;
