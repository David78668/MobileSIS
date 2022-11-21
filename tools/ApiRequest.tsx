import * as SecureStore from 'expo-secure-store';

interface FetchConfig {
	requestUrl: string,
	setDataFunction: React.Dispatch<React.SetStateAction<object>>,
	setErrorFunction: React.Dispatch<React.SetStateAction<boolean>>,
	setLoadedFunction: React.Dispatch<React.SetStateAction<boolean>>
}

const FetchData = async (Config : FetchConfig) => {
	fetch(Config.requestUrl, { method: 'get', headers: new Headers({ 'Authorization': 'Bearer '+ await SecureStore.getItemAsync("kybernaAccessToken") }) })
	  .then(res => {return(res.json())})
	  .then(
		(result) => {
			Config.setDataFunction(result);
			Config.setLoadedFunction(true);
		},
		
		(error) => {
			Config.setErrorFunction(true);
			Config.setLoadedFunction(true)
		}
	)
}

export default FetchData;