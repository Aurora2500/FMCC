import React from "react";
import ReactDOM from "react-dom/client";
import App from "app/App";
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { theme } from "app/theme";
import Rooms from "features/rooms/Rooms";
import Main from "app/Main";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App/>,
		children: [
			{
				path: "/",
				element: <Main/>,
			},
			{
				path: "/habitaciones",
				element: <Rooms/>,
			}
		]
	}
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<RouterProvider router={router}/>
			<CssBaseline/>
		</ThemeProvider>
	</React.StrictMode>
);
