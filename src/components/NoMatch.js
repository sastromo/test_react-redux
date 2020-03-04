import React, { Fragment } from 'react';

//css
import { Header, Paragraph, } from '../style/styles';


export default function NoMatch() {
	return (
		<Fragment>
			<Header>
				<Paragraph>Nothing here</Paragraph>
			</Header>
		</Fragment>
	);
}
