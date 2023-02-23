export const Dark_Colors = {
	PrimaryBackgroundColor: "#212121",
	SecondaryBackgroundColor: "#171717",
	TertiaryBackgroundColor: "#E9671E",
	PrimaryTextColor: "white",
	SecondaryTextColor: "#f4f4f4",
	TertiaryTextColor: "#424242",
	LessonRemovedColor: "#ed4545",
	ClassroomChangedColor: "#ed4545",
	TeacherChangedColor: "#ed4545",
	NavbarColor: "#b5b5b5"
}

export const Colors = {
	PrimaryBackgroundColor: "white",
	SecondaryBackgroundColor: "#f4f4f4",
	TertiaryBackgroundColor: "#E9671E",
	PrimaryTextColor: "white",
	SecondaryTextColor: "black",
	TertiaryTextColor: "lightgray",
	LessonRemovedColor: "#EE5656",
	ClassroomChangedColor: "#EE5656",
	TeacherChangedColor: "#EE5656",
	NavbarColor: "#696969"
}

export type ColorPallete = {
	PrimaryBackgroundColor: String,
	SecondaryBackgroundColor: String,
	TertiaryBackgroundColor: String,
	PrimaryTextColor: String,
	SecondaryTextColor: String,
	TertiaryTextColor: String,
	LessonRemovedColor: String,
	ClassroomChangedColor: String,
	TeacherChangedColor: String,
} | undefined;

export default function GetColors(darkMode: boolean) {
	if (darkMode) return Dark_Colors;
	return Colors;
}