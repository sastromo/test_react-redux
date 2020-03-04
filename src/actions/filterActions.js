import {
	FETCH_CURRENTFILTERLIST_JSON_DATA,
	ADD_CUSTOM_FILTER,
	ADD_FILTER_LIST,
	DELETE_CUSTOM_FILTER,
	SEARCH_CUSTOM_FILTER,
	SET_CITY_FILTER,
	SET_DATE_FILTER,
	SET_TIME_FILTER,
	SET_TOPIC_FILTER,
	DISABLE_SAVE_FILTER_BUTTON
} from '../actions/types';


export const fetchCustomfiltersJsonData = (JsonData) => {
	return {
		type: FETCH_CURRENTFILTERLIST_JSON_DATA,
		payload: JsonData
	};
};

export const addCustomFilter = (CustomFilters) => {
	return {
		type: ADD_CUSTOM_FILTER,
		payload: CustomFilters
	};
};

export const addFilterList = (filteredList) => {
	return {
		type: ADD_FILTER_LIST,
		payload: filteredList
	};
};

export const deleteCustomFilter = (id) => {
	return {
		type: DELETE_CUSTOM_FILTER,
		payload: id // OR id:id OR id
	};
};

export const searchCustomFilter = (city, date, time_start, topic) => {
	return {
		type: SEARCH_CUSTOM_FILTER,
		payload: { city, date, time_start, topic }
	};
};

export const setCityFilter = (city) => {
	return {
		type: SET_CITY_FILTER,
		payload: city
	};
};

export const setDateFilter = (date) => {
	return {
		type: SET_DATE_FILTER,
		payload: date
	};
};

export const setTimeFilter = (time) => {
	return {
		type: SET_TIME_FILTER,
		payload: time
	};
};

export const setTopicFilter = (topic) => {
	return {
		type: SET_TOPIC_FILTER,
		payload: topic
	};
};
export const setDisableSaveFiltersButton = (bool) => {
	return {
		type: DISABLE_SAVE_FILTER_BUTTON,
		payload: bool
	};
};
