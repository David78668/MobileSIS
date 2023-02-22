import { getItemAsync, setItemAsync } from "expo-secure-store";

export type UserSettings = {
	darkMode: boolean
}

const CONFIG_KEY = "config";
const DEFAULT_CONFIG: UserSettings = {
	darkMode: true,
};
class ConfigTool {
	
	static SaveConfig(config: UserSettings) {
		setItemAsync(CONFIG_KEY, JSON.stringify(config));
	}

	static async LoadConfig(){
		var config = await getItemAsync(CONFIG_KEY);
		if(config){
			var output: UserSettings = JSON.parse(config);
			return output;
		}
		return null;
	}

	static Init(){
		if(!this.LoadConfig()){
			setItemAsync(CONFIG_KEY, JSON.stringify(DEFAULT_CONFIG));
		}
	}
}