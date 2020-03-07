import {
	FETCH_CURRENTFILTERS_DATA,
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

const INITIAL_STATE = {
	customFilters: [],
	searchFilter: [],
	filteredList: [],
	inputCityFilterValue: '',
	inputDateFilterValue: '',
	inputTopicFilterValue: '',
	inputTimeFilterValue: '',
	disableSaveFiltersButton: true
};

const filterReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FETCH_CURRENTFILTERS_DATA:
			return {
				...state,
				customFilters: action.payload
			};
		case ADD_CUSTOM_FILTER:
			return {
				...state,
				customFilters: [ ...state.customFilters, action.payload ]
			};
		case ADD_FILTER_LIST:
			return {
				...state,
				filteredList: action.payload
			};

		case DELETE_CUSTOM_FILTER:
			return {
				...state,
				customFilters: state.customFilters.filter(({ id }) => id !== action.payload)
			};

		case SEARCH_CUSTOM_FILTER:
			return {
				...state,
				searchFilter: [
					action.payload.city,
					action.payload.date,
					action.payload.time_start,
					action.payload.topic
				]
			};

		case SET_CITY_FILTER:
			return {
				...state,
				inputCityFilterValue: action.payload
			};

		case SET_DATE_FILTER:
			return {
				...state,
				inputDateFilterValue: action.payload
			};

		case SET_TIME_FILTER:
			return {
				...state,
				inputTimeFilterValue: action.payload
			};

		case SET_TOPIC_FILTER:
			return {
				...state,
				inputTopicFilterValue: action.payload
			};

		case DISABLE_SAVE_FILTER_BUTTON:
			return {
				...state,
				disableSaveFiltersButton: action.payload
			};

		default:
			return state;
	}
};

export default filterReducer;
