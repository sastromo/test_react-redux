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

////////////
export const checkEventMatchedFilter = (customFilters, inputValuesObj) => {
	const getFilteredValues = (list, filterParams) => {
		console.log('------------------------------------------');

		return list.reduce((newList, item) => {
			const matchesPerKey = Object.keys(filterParams).map((filterKey) => {
				if (filterKey !== 'topic') {
					console.log(
						'[',
						filterParams[filterKey],
						'=',
						item[filterKey],
						']->',
						filterParams[filterKey] === item[filterKey]
					);
					return filterParams[filterKey] === item[filterKey];
				} else {
					const comparison = !!filterParams[filterKey].find((match) => {
						console.log('[', match, '=', item[filterKey], ']->', match === item[filterKey]);
						return match === item[filterKey];
					});
					return comparison;
				}
			});
			console.log('TCL: getFilteredValues -> matchesPerKey', matchesPerKey);

			const allFiltersPass = matchesPerKey.find((match) => {
				return match === true;
			});

			console.log('TCL: getFilteredValues -> allFiltersPass', allFiltersPass);
			if (allFiltersPass) {
				console.log('TCL: getFilteredValues -> item', item);
				return [ ...newList, item ];
			}
			// Se passou no teste, adiciona o item a lista de items filtrados.
			console.log('------------------------------------------');
			return newList;
		}, []);
	};

	const filteredValues = getFilteredValues(customFilters, inputValuesObj);
	console.log('TCL: checkEventMatchedFilter -> filteredValues', filteredValues);
	filteredValues.length > 0 && alert(`Event matched in ${filteredValues.length} Saved Filters`);
};
