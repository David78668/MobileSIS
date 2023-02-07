import { Dispatch, SetStateAction } from 'react';
import * as SecureStore from 'expo-secure-store';
import { animation } from '../declarations/animation';

interface RequestProps {
	requestUrl: string,
	setData: Dispatch<SetStateAction<object>>,
	setError: Dispatch<SetStateAction<boolean>>,
	setLoaded: Dispatch<SetStateAction<boolean>>
}

export default async function ApiRequest(props: RequestProps) {
	const { testToken } = require('../test-data/test-token.json');

	fetch(props.requestUrl, {
		method: 'get',
		headers: new Headers({ 'Authorization': testToken }),
		//headers: new Headers({ 'Authorization': `Bearer ${await SecureStore.getItemAsync("kybernaAccessToken")}` })
	})
	.then(res => res.json())
	.then((result) => {
		props.setData(result);
		props.setLoaded(true);

		animation();
	}, (error) => {
		props.setLoaded(true);
		
		animation();
	});
}