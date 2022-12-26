import React, { Dispatch, SetStateAction } from 'react';
import * as SecureStore from 'expo-secure-store';
import { animation } from '../declarations/animation';

interface RequestProps {
	requestUrl: string,
	setData: Dispatch<SetStateAction<object>>,
	setError: Dispatch<SetStateAction<boolean>>,
	setLoaded: Dispatch<SetStateAction<boolean>>
}

export default async function ApiRequest(props: RequestProps) {
	fetch(props.requestUrl, {
		method: 'get',
		headers: new Headers({ 'Authorization': `Bearer ${await SecureStore.getItemAsync("kybernaAccessToken")}` })
	})
	.then(res => res.json())
	.then((result) => {
		props.setData(result);
		props.setLoaded(true);

		animation();
	}, (error) => {
		props.setError(true);
		props.setLoaded(true);

		animation();
	});
}