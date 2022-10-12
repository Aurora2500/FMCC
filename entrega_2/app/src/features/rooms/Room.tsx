import { Stack, Typography } from "@mui/material";
import { Room } from "data";
import React from "react";
import { useLoaderData } from "react-router-dom";

const Form = () => {
	
};

const RoomElement = () => {

	const room = useLoaderData() as Room;
	console.log(room);
	
	return (
		<>
			<Stack>
				<Typography variant="h3">{room.name}</Typography>
				<Typography>{room.description}</Typography>
			</Stack>
		</>
	);
};

export default RoomElement;
