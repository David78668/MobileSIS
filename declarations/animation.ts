import { LayoutAnimation, Platform, UIManager } from 'react-native';

if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

export function animation() {
    LayoutAnimation.configureNext({
        duration: 500,
        create: { type: "linear", property: "opacity" },
        update: { type: "spring", springDamping: 1 },
        delete: { type: "linear", property: "opacity" }
    });
}