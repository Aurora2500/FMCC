import { Box, Stack, Table, TableBody, TableCell, TableRow, Typography } from "@mui/material";
import { Room, ServiceIcon } from "data";
import { Form } from "Form";
import React from "react";
import { useLoaderData } from "react-router-dom";
const RoomElement = () => {

	const room = useLoaderData() as Room;
	console.log(room);
	
	return (
		<>
			<Stack gap={15}>

				<Stack gap={5}>
					<Stack direction="row" justifyContent="center">
						<Box component="img" src={room.image} alt={room.name} sx={{height: { lg: 400, xs: 200}}} />
					</Stack>
					<Typography variant="h3">{room.name}</Typography>
					<Typography>{room.description}</Typography>
					<Table>
						<TableBody>
							<TableRow>
								<TableCell>Precio</TableCell>
								<TableCell>{room.price}€</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Camas</TableCell>
								<TableCell>{room.beds}</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Servicios</TableCell>
								<TableCell>
									{room.services.map((service) => (
										<ServiceIcon key={service} service={service} />
									))}
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</Stack>
				<Form />
			</Stack>
		</>
	);
};

export default RoomElement;
