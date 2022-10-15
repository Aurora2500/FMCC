import { Box, Button, Paper, Stack, Table, TableBody, TableCell, TableRow, TextField, Typography } from "@mui/material";
import { Room, ServiceIcon } from "data";
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { DateTime } from "luxon";
import { DateRange, DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { AdapterLuxon } from "@mui/x-date-pickers-pro/AdapterLuxon";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";

const Form = () => {
	const [days, setDays] = useState<DateRange<DateTime>>([null, null]);
	return (
		<Paper sx={{p: 4}}>
			<Stack gap={3} alignItems="center">

			Días de estancia:
				<LocalizationProvider
					dateAdapter={AdapterLuxon}
				>
					<DateRangePicker
						value={days}
						onChange={(newValue) => {
							setDays(newValue);
						}}
						renderInput={(startProps, endProps) => (
							<>
								<TextField {...startProps} />
								<Box sx={{ mx: 2 }}> to </Box>
								<TextField {...endProps} />
							</>
						)}
					/>
				</LocalizationProvider>
				<Stack direction="row" gap={6}>
					<TextField
						label="Número de adultos"
						type="number"
					/>
					<TextField
						label="Número de niños"
						type="number"
					/>
				</Stack>

				<Button variant="outlined">Reservar</Button>
			</Stack>
		</Paper>
	);
};

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
