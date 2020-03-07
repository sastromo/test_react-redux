import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'react-uuid';
import Button from '../commonComponents/Button';

import { checkEventMatchedFilter } from '../../helper';

import {
	addEvent,
	setName,
	setCity,
	setDate,
	setTimeStart,
	setTimeEnd,
	setSelectedTopic
} from '../../store/actions/eventActions';

//css
import { Wrapper, InputGroup, Header, Paragraph, InputLabel, InputControl, Dropdown } from '../../style/styles';

/////////////////
export const Events = () => {
	const stateArray = useSelector((state) => state.eventState);
	const dispatch = useDispatch();
	/////
	const inputNameValue = useSelector((state) => state.eventState.inputNameValue);
	const inputCityValue = useSelector((state) => state.eventState.inputCityValue);
	const inputDateValue = useSelector((state) => state.eventState.inputDateValue);
	const inputTimeStartValue = useSelector((state) => state.eventState.inputTimeStartValue);
	const inputTimeEndValue = useSelector((state) => state.eventState.inputTimeEndValue);
	const inputSelectedTopicValue = useSelector((state) => state.eventState.inputSelectedTopicValue);
	const customFilters = useSelector((state) => state.filterState.customFilters);

	const onSubmitHandler = (e) => {
		e.preventDefault();

		const event = {
			id: uuid(),
			name: inputNameValue,
			city: inputCityValue,
			date: inputDateValue.split('-').reverse().join('/'),
			time_start: inputTimeStartValue,
			time_end: inputTimeEndValue,
			topic: inputSelectedTopicValue
		};
		dispatch(addEvent(event));

		const inputValuesObj = JSON.parse(
			JSON.stringify({
				city: inputCityValue,
				date: inputDateValue.split('-').reverse().join('/'),
				time_start: inputTimeStartValue,
				topic: inputSelectedTopicValue
			})
		);

		checkEventMatchedFilter(customFilters, inputValuesObj);
		cleanFilterInputs();
	};

	const cleanFilterInputs = () => {
		dispatch(setName(''));
		dispatch(setCity(''));
		dispatch(setDate(''));
		dispatch(setTimeStart(''));
		dispatch(setTimeEnd(''));
		dispatch(setSelectedTopic(''));
	};

	return (
		<Fragment>
			<Header>
				<Paragraph>Add Event</Paragraph>
			</Header>
			<Wrapper>
				<form onSubmit={onSubmitHandler}>
					<InputGroup>
						<InputLabel>Name</InputLabel>
						<InputControl
							type='text'
							title='Name:'
							name='name'
							required
							value={inputNameValue}
							placeholder='Add name...'
							onChange={(e) => dispatch(setName(e.target.value))}
							styleFlex='flex_5'
						/>
					</InputGroup>
					<InputGroup>
						<InputLabel>City</InputLabel>
						<InputControl
							type='text'
							title='City:'
							name='city'
							required
							value={inputCityValue}
							placeholder='Add City...'
							onChange={(e) => dispatch(setCity(e.target.value))}
							styleFlex='flex_5'
						/>
					</InputGroup>

					<InputGroup>
						<InputLabel>Date</InputLabel>
						<InputControl
							type='date'
							title='Date:'
							name='date'
							required
							value={inputDateValue}
							placeholder='Add date...'
							onChange={(e) => dispatch(setDate(e.target.value))}
							styleFlex='flex_5'
						/>
					</InputGroup>
					<InputGroup>
						<InputLabel>Time Start</InputLabel>
						<InputControl
							required
							type='time'
							title='TimeStart:'
							name='timeStart'
							value={inputTimeStartValue}
							placeholder='Add TimeStart...'
							onChange={(e) => dispatch(setTimeStart(e.target.value))}
							styleFlex='flex_2'
						/>
						<InputLabel>Time End</InputLabel>
						<InputControl
							required
							type='time'
							title='TimeEnd:'
							name='timeEnd'
							value={inputTimeEndValue}
							placeholder='Add TimeEnd...'
							onChange={(e) => dispatch(setTimeEnd(e.target.value))}
							styleFlex='flex_2'
						/>
					</InputGroup>

					<InputGroup>
						<InputLabel>Topics</InputLabel>
						<Dropdown
							isMulti
							name='topics'
							isClearable
							options={stateArray.topicNames}
							onChange={(e) =>
								e === null ? null : dispatch(setSelectedTopic(e.map((topic) => topic.value)))}
							theme={(theme) => ({
								...theme,
								borderRadius: 0
							})}
							styles={{ multiValueRemove: (base) => ({ ...base, display: 'none' }) }}
						/>
					</InputGroup>

					{/* (vv) quick fix for the lack of isRequired from react-select (vv) */}
					{inputSelectedTopicValue.length !== 0 ? (
						<Button type='submit'>Add Event</Button>
					) : (
						<Button type='button' buttonType='disable'>
							Add Event
						</Button>
					)}
					{/* TODO: "validation required" warning [NOT A PRIORITY] */}
					{/* (^^) quick fix for the lack of isRequired from react-select (^^) */}
				</form>
			</Wrapper>
		</Fragment>
	);
};

export default Events;
