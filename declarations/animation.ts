import { LayoutAnimation, Platform, UIManager } from 'react-native';

export function animation() {
    if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    LayoutAnimation.configureNext({
        duration: 500,
        create: { type: "linear", property: "opacity" },
        update: { type: "spring", springDamping: 1 },
        delete: { type: "linear", property: "opacity" }
    });
}