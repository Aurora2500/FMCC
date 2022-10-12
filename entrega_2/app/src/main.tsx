import React from "react";
import ReactDOM from "react-dom/client";
import App from "app/App";
import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { theme } from "app/theme";
import Rooms from "features/rooms/Rooms";
import Room from "features/rooms/Room";
import Main from "app/Main";
import { availableRoomMap } from "data";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App/>,
		errorElement: <Navigate to="/"/>,
		children: [
			{
				path: "/",
				element: <Main/>,
			},
			{
				path: "/habitaciones",
				element: <Rooms/>,
			},
			{
				path: "/habitaciones/:id",
				loader: ({params}) => availableRoomMap[params.id as string],
				element: <Room/>,
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
