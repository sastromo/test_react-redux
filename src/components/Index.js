import React, { Fragment, useEffect } from 'react';
import uuid from 'react-uuid';

//redux
import { useDispatch, useSelector } from 'react-redux';
import {
	addCustomFilter,
	addFilterList,
	setCityFilter,
	setDateFilter,
	setTimeFilter,
	setTopicFilter,
	setDisableSaveFiltersButton
} from '../store/actions/filterActions';

import FilterEventForm from './filterComponents/FilterEventForm';
import ListEvents from './eventsComponents/ListEvents';

import { filterEngine } from '../helper';

export default function Index() {
	/// REDUX ///
	const stateEventArray = useSelector((state) => state.eventState.events);
	const dispatch = useDispatch();

	const filteredList = useSelector((state) => state.filterState.filteredList);
	const inputCityFilterValue = useSelector((state) => state.filterState.inputCityFilterValue);
	const inputDateFilterValue = useSelector((state) => state.filterState.inputDateFilterValue);
	const inputTimeFilterValue = useSelector((state) => state.filterState.inputTimeFilterValue);
	const inputTopicFilterValue = useSelector((state) => state.filterState.inputTopicFilterValue);

	useEffect(
		() => {
			const filteredEvents = filterEngine(
				stateEventArray,
				inputCityFilterValue,
				inputDateFilterValue,
				inputTimeFilterValue,
				inputTopicFilterValue
			);
			dispatch(addFilterList(filteredEvents));
		},
		[
			dispatch,
			stateEventArray,
			inputCityFilterValue,
			inputDateFilterValue,
			inputTimeFilterValue,
			inputTopicFilterValue
		]
	);

	////
	const filterByCity = ({ target: { value: inputValue } }) => {
		checkDisableSaveFiltersButton(inputValue);
		dispatch(setCityFilter(inputValue));
	};

	const filterByDate = ({ target: { value: inputValue } }) => {
		checkDisableSaveFiltersButton(inputValue.split('-').reverse().join('/'));
		dispatch(setDateFilter(inputValue.split('-').reverse().join('/')));
	};

	const filterByTime = ({ target: { value: inputValue } }) => {
		checkDisableSaveFiltersButton(inputValue);
		dispatch(setTimeFilter(inputValue));
	};

	const filterByTopic = (inputValue) => {
		//react-select (clear) [FIX is not priority]
		if (inputValue !== null) {
			checkDisableSaveFiltersButton(inputValue.value);
			dispatch(setTopicFilter(inputValue.value));
		}
	};

	const checkDisableSaveFiltersButton = (input) => {
		input.length === 0 ? dispatch(setDisableSaveFiltersButton(true)) : dispatch(setDisableSaveFiltersButton(false));
	};

	///
	const onSubmitSaveCustomFilter = (e) => {
		e.preventDefault();

		if (
			inputCityFilterValue !== '' ||
			inputDateFilterValue !== '' ||
			inputTimeFilterValue !== '' ||
			inputTopicFilterValue !== ''
		) {
			const customFilter = {
				id: uuid(),
				city: inputCityFilterValue,
				date: inputDateFilterValue,
				time_start: inputTimeFilterValue,
				topic: inputTopicFilterValue
			};
			dispatch(addCustomFilter(customFilter));
		}
		dispatch(setDisableSaveFiltersButton(true));
		cleanFilterInputs();
	};

	const cleanFilterInputs = () => {
		dispatch(setCityFilter(''));
		dispatch(setDateFilter(''));
		dispatch(setTimeFilter(''));
		dispatch(setTopicFilter(''));
	};

	return (
		<Fragment>
			<FilterEventForm
				onSubmitSaveCustomFilter={onSubmitSaveCustomFilter}
				cleanFilterInputs={cleanFilterInputs}
				//
				inputCityFilterValue={inputCityFilterValue}
				filterByCity={filterByCity}
				//
				inputDateFilterValue={inputDateFilterValue}
				filterByDate={filterByDate}
				//
				inputTimeFilterValue={inputTimeFilterValue}
				filterByTime={filterByTime}
				//
				filterByTopic={filterByTopic}
			/>

			<ListEvents list={filteredList} cleanFilterInputs={cleanFilterInputs} />
		</Fragment>
	);
}
