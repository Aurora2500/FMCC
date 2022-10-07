import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

const Root = () => {
	return (
		<>
			<AppBar position="fixed">
				<Toolbar>
					<Typography
						variant="h3"
					>Lopesan</Typography>
				</Toolbar>
			</AppBar>
			<Toolbar/>
			<Outlet/>
		</>
	);
};

export default Root;
