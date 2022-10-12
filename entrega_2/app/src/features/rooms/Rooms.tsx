import React from "react";
import { availableRooms, Room, Services } from "data";
import { Button, Card, CardContent, CardHeader, CardMedia, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import { Bathtub, LocalBar, Phone, Restaurant, Tv, Wifi } from "@mui/icons-material";
import { Link } from "react-router-dom";

const ServiceIcon: React.FC<{service: Services}> = ({service}) => {
	switch (service) {
	case "Hot Tub":
		return <Bathtub/>;
	case "Phone":
		return <Phone/>;
	case "Wifi":
		return <Wifi/>;
	case "TV":
		return <Tv/>;
	case "Bar": 
		return <LocalBar/>;
	case "Breakfast":
		return <Restaurant/>;
	
	}
};

const RoomCard: React.FC<{room: Room}> = ({room}) => {
	return (
		<Card>
			<CardHeader
				title={room.name}
			/>
			<CardMedia
				component="img"
				height="240"
				sx={{ width: 280 }}
				image={room.image}
			/>
			<CardContent>
				<Stack gap={1.4}>
					<Stack direction="row" spacing={1}>
						{room.services.map((service) => (
							<React.Fragment key={service}>
								<ServiceIcon service={service}/>
							</React.Fragment>
						))}
					</Stack>
					<Typography>Desde {room.price}€</Typography>
					<Typography>{room.beds} camas</Typography>
					<Button component={Link} to={"/habitaciones/" + room.id}>Ver</Button>
				</Stack>
			</CardContent>
		</Card>
	);
};

const Rooms = () => {
	const mw = useMediaQuery("(min-width: 800px)");

	return (
		<>
			<Typography variant="h3">
				Nuestras habitaciones
			</Typography>
			<Grid container gap={3} >
				{availableRooms.map(room => (
					<Grid item key={room.id} >
						<RoomCard room={room}/>
					</Grid>
				))}
			</Grid>
		</>
	);
};

export default Rooms;
