import React from "react";
import { availableRooms, Room, ServiceIcon } from "data";
import { Button, Card, CardContent, CardHeader, CardMedia, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

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
	return (
		<>
			<Typography variant="h3">
				Nuestras habitaciones
			</Typography>
			<Grid container gap={3} justifyContent="center" >
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
