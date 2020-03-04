import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Index from './components/Index.js';
import NavBar from './components/NavBar';
import AddEvents from './components/eventsComponents/AddEvents';
import SavedFilters from './components/filterComponents/SavedFilters';
import NoMatch from './components/NoMatch';

import { useDispatch } from 'react-redux';
import { fetchEventsData,fetchTopicNamesData } from './actions/eventActions';
import { fetchCustomfiltersData } from './actions/filterActions';

//css
import { AppStyle } from './style/styles';

// fetch data.json
import * as data from './data/data.json';

function App() {
	const dispatch = useDispatch();

	useEffect(
		() => {
			dispatch(fetchEventsData(data.events));
			dispatch(fetchTopicNamesData(data.topicNames));
			dispatch(fetchCustomfiltersData(data.customFilters));
		},
		[ dispatch ]
	);

	return (
		<Router>
			<AppStyle>
				<NavBar />
				<Switch>
					<Route path='/' exact component={Index} />
					<Route path='/addEvents' component={AddEvents} />
					<Route path='/savedFilters' component={SavedFilters} />
					<Route component={NoMatch} />
				</Switch>
			</AppStyle>
		</Router>
	);
}

export default App;
