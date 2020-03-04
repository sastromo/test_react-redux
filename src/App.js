import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Index from './components/Index.js';
import NavBar from './components/NavBar';
import AddEvents from './components/eventsComponents/AddEvents';
import SavedFilters from './components/filterComponents/SavedFilters';
import NoMatch from './components/NoMatch';

import { useDispatch } from 'react-redux';
import { fetchEventsJsonData } from './actions/eventActions';
import { fetchCustomfiltersJsonData } from './actions/filterActions';

//css
import { AppStyle } from './style/styles';

function App() {
	const dispatch = useDispatch();

	useEffect(
		() => {
			fetch('http://localhost:3000/eventsList.json')
				.then((res) => {
					return res.json();
				})
				.then((eventsListData) => {
					dispatch(fetchEventsJsonData(eventsListData));
				});

			fetch('http://localhost:3000/CustomfiltersList.json')
				.then((res) => {
					return res.json();
				})
				.then((CustomfiltersListData) => {
					dispatch(fetchCustomfiltersJsonData(CustomfiltersListData.customFilters));
				});
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
