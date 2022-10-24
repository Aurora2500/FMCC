import { Button, Paper, TextField } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { DateRange, DateRangePicker, LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterLuxon } from "@mui/x-date-pickers-pro/AdapterLuxon";
import { DateTime } from "luxon";
import React, { useState } from "react";

export const Form = () => {
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
