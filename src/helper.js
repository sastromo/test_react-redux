export const filterEngine = (
	stateEventArray,
	inputCityFilterValue,
	inputDateFilterValue,
	inputTimeFilterValue,
	inputTopicFilterValue
) => {
	let filtered = stateEventArray;

	if (inputCityFilterValue) {
		filtered = filtered.filter((filteredEvent) => {
			return filteredEvent.city.toLowerCase().search(inputCityFilterValue.toLowerCase()) !== -1;
		});
	}

	if (inputDateFilterValue) {
		filtered = filtered.filter((filteredEvent) => {
			return filteredEvent.date.search(inputDateFilterValue) !== -1;
		});
	}

	if (inputTimeFilterValue) {
		filtered = filtered.filter((filteredEvent) => {
			return filteredEvent.time_start.search(inputTimeFilterValue) !== -1;
		});
	}

	if (inputTopicFilterValue) {
		filtered = filtered.filter((filteredEvent) => {
			const filteredTopic = filteredEvent.topic.filter((topics) => {
				return topics.toLowerCase().search(inputTopicFilterValue.toLowerCase()) !== -1;
			});
			return filteredTopic.length > 0;
		});
	}

	return filtered;
};

//
export const checkEventMatchedFilter = (customFilters, inputValuesObj) => {
	const getFilteredValues = (list, filterParams) => {
		return list.reduce((newList, item) => {
			const matchesPerKey = Object.keys(filterParams).map((filterKey) => {
				if (filterKey !== 'topic') {
					return filterParams[filterKey] === item[filterKey];
				} else {
					const comparison = !!filterParams[filterKey].find((match) => {
						return match === item[filterKey];
					});
					return comparison;
				}
			});

			const allFiltersPass = matchesPerKey.find((match) => {
				return match === true;
			});

			if (allFiltersPass) {
				return [ ...newList, item ];
			}

			return newList;
		}, []);
	};

	const filteredValues = getFilteredValues(customFilters, inputValuesObj);
	filteredValues.length > 0 && alert(`Event matched in ${filteredValues.length} Saved Filters`);
};
