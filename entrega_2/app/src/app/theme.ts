import { createTheme } from "@mui/material";

export const theme = createTheme({
	palette: {
		primary: {
			main: "#D4A373",
		},
		secondary: {
			main: "#000000",
		},
		background: {
			default: "#FEFAE0",
			paper: "#FAEDCD",
		},
	},
	typography: {
		fontWeightRegular: 700,
		fontSize: 13,
		fontWeightMedium: 700,
	},
});
