import React, { Fragment } from 'react';
import Button from '../commonComponents/Button';

//css
import {
	Container,
	ListContainer,
	ListWrapper,
	DateDiv,
	DateDate,
	RestDiv,
	TimeDiv,
	Time,
	NameCityTopicDiv,
	Name,
	City,
	TopicList,
	TopicItem,
	Topic
} from '../../style/styles';

const ListEvents = (props) => {
	const { list, cleanFilterInputs } = props;
	const isEmpty = !list.length;

	const timeStampDate = list.map((record) => {
		const dateString = record.date.split('/').reverse().toString();
		const dateTimestamp = Date.parse(dateString);

		return {
			...record,
			date: dateTimestamp
		};
	});

	const sortedTimeStampDate = timeStampDate.sort((a, b) => {
		if (a.date > b.date) {
			return 1;
		}
		if (a.date < b.date) {
			return -1;
		}
		return 0;
	});

	//TODO: combine same date events [NOT A PRIORITY]

	return (
		<Fragment>
			{isEmpty ? (
				<div>
					<br />
					<h2> Event Not Found </h2>
					<Button
						onClick={() => {
							cleanFilterInputs();
						}}
					>
						Show All
					</Button>
				</div>
			) : (
				<Container>
					{sortedTimeStampDate.map((value) => (
						<ListContainer key={value.id}>
							<ListWrapper >
								<DateDiv>
									<DateDate>
										{new Date(value.date).toLocaleDateString('en-GB', {
											day: '2-digit',
											month: '2-digit',
											year: 'numeric'
										})}
									</DateDate>
								</DateDiv>
								<RestDiv>
									<TimeDiv>
										<Time styleListEvents='timeStart'>{value.time_start}</Time>
										<Time styleListEvents='timeEnd'>{value.time_end}</Time>
									</TimeDiv>
									<NameCityTopicDiv>
										<Name>{value.name}</Name>
										<City>{value.city}</City>
										<TopicList>
											{value.topic.map((item) => (
												<Fragment key={item}>
													<TopicItem >
														<Topic>{item}</Topic>
													</TopicItem>
												</Fragment>
											))}
										</TopicList>
									</NameCityTopicDiv>
								</RestDiv>
							</ListWrapper>
						</ListContainer>
					))}
				</Container>
			)}
		</Fragment>
	);
};

export default ListEvents;

//old list
// const listMap = list.map((e) => (
// 	<h4 key={e.id}>
// 		{e.name},
// 		{e.city},
// 		{'__  '}
// 		{e.date}
// 		{'  __'},
// 		{e.time_start},
// 		{e.time_end}
// 		{e.topic.map((item) => <span key={item}>,{item}</span>)}
// 	</h4>
// ));
