import React, { FunctionComponent} from 'react'

interface propTypes {
	item1: FunctionComponent,
	item2: FunctionComponent,
	index: number,
}

const HomeSwitchPage = (props: propTypes) => {
	if (props.index == 0) {
		return (
			<props.item1 />
		)
	}
	else {
		return (
			<props.item2 />
		)
	}
}

export default HomeSwitchPage;