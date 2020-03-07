import {
	FETCH_EVENTS_DATA,
	FETCH_TOPICNAMES_DATA,
	ADD_EVENT,
	DELETE_EVENT,
	SET_NAME,
	SET_CITY,
	SET_DATE,
	SET_TIME_START,
	SET_TIME_END,
	SET_SELECTED_TOPIC
} from './types';

export const fetchEventsData = (JsonData) => {
	return {
		type: FETCH_EVENTS_DATA,
		payload: JsonData
	};
};
export const fetchTopicNamesData = (JsonData) => {
	return {
		type: FETCH_TOPICNAMES_DATA,
		payload: JsonData
	};
};

export const addEvent = (events) => {
	return {
		type: ADD_EVENT,
		payload: events
	};
};

export const deleteEvent = (id) => {
	return {
		type: DELETE_EVENT,
		payload: id // OR id:id OR id
	};
};

export const setName = (name) => {
	return {
		type: SET_NAME,
		payload: name
	};
};

export const setCity = (city) => {
	return {
		type: SET_CITY,
		payload: city
	};
};
export const setDate = (date) => {
	return {
		type: SET_DATE,
		payload: date
	};
};
export const setTimeStart = (timeStart) => {
	return {
		type: SET_TIME_START,
		payload: timeStart
	};
};
export const setTimeEnd = (timeEnd) => {
	return {
		type: SET_TIME_END,
		payload: timeEnd
	};
};
export const setSelectedTopic = (selectedTopic) => {
	return {
		type: SET_SELECTED_TOPIC,
		payload: selectedTopic
	};
};
