import React, { useState } from "react";
import { AppBar, Button, Container, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Paper, Stack, Toolbar, Typography } from "@mui/material";
import { Outlet, Link } from "react-router-dom";
import { Box } from "@mui/system";
import { Menu } from "@mui/icons-material";

interface NavLink {
	label: string;
	href: string;
}

const navLinks: NavLink[] = [
	{
		label: "Sobre nosotros",
		href: "/"
	},
	{
		label: "Nuestras habitaciones",
		href: "/habitaciones"
	}
];

const App = () => {

	const [open, setOpen] = useState(false);

	return (
		<>
			<AppBar position="fixed">
				<Toolbar sx={{display: {xs: "none", lg: "flex"}}}>
					<Stack direction="row" gap={3}>
						<Typography
							variant="h4"
						>
						Lopesan
						</Typography>
						{navLinks.map(link => (
							<Button key={link.href} component={Link} to={link.href} color="secondary">
								{link.label}
							</Button>
						))}
					</Stack>
				</Toolbar>
				<Toolbar sx={{display: {xs: "flex", lg: "none"}}}
				>
					<Stack
						direction="row"
						justifyContent="space-between"
						sx={{height: "100%"}}
						alignItems="center">
						<IconButton onClick={() => setOpen(true)}><Menu/></IconButton>
						<Typography variant="h4">
						Lopesan
						</Typography>
						<Box/>
					</Stack>
				</Toolbar>
			</AppBar>
			<Drawer
				open={open}
				onClose={() => setOpen(false)}
			>
				<List>
					{navLinks.map(link => (
						<ListItem key={link.label} disablePadding>
							<ListItemButton component={Link} to={link.href} onClick={() => setOpen(false)}>
								<ListItemText primary={link.label} />
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Drawer>
			<Toolbar/>
			<Container maxWidth="lg" sx={{my: 5}}>
				<Outlet/>
			</Container>
			<Paper sx={{height: 200, backgroundColor: "black"}} square>
				<Container>
					<Stack direction="row" justifyContent="center" sx={{pt: 10}}>
						<Typography color="white" variant="h5">
							Hecho por Pablo, Andrea, Miriam y Aurora
						</Typography>
					</Stack>
				</Container>
			</Paper>
		</>
	);
};

export default App;
