import {
	FETCH_EVENTSLIST_JSON_DATA,
	ADD_EVENT,
	DELETE_EVENT,
	SET_NAME,
	SET_CITY,
	SET_DATE,
	SET_TIME_START,
	SET_TIME_END,
	SET_SELECTED_TOPIC
} from '../actions/types';

//EXPORT DATA FROM JSON FILE???

const INITIAL_STATE = {
	events: [],
	topicName: [],
	inputNameValue: '',
	inputCityValue: '',
	inputDateValue: '',
	inputTimeStartValue: '',
	inputTimeEndValue: '',
	inputSelectedTopicValue: []
};

const eventReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FETCH_EVENTSLIST_JSON_DATA:
			return {
				...state,
				events: action.payload.events,
				topicName:action.payload.topicName
			};

		case ADD_EVENT:
			return {
				...state,
				events: [ ...state.events, action.payload ]
			};

		case DELETE_EVENT:
			return {
				...state,
				events: state.events.filter(({ id }) => id !== action.payload) // action.payload OR action.id
				//events: state.events.filter((event) => event.id !== action.payload) };
			};

		case SET_NAME:
			return {
				...state,
				inputNameValue: action.payload
			};

		case SET_CITY:
			return {
				...state,
				inputCityValue: action.payload
			};

		case SET_DATE:
			return {
				...state,
				inputDateValue: action.payload
			};

		case SET_TIME_START:
			return {
				...state,
				inputTimeStartValue: action.payload
			};

		case SET_TIME_END:
			return {
				...state,
				inputTimeEndValue: action.payload
			};

		case SET_SELECTED_TOPIC:
			return {
				...state,
				inputSelectedTopicValue: action.payload
			};

		default:
			return state;
	}
};

export default eventReducer;
