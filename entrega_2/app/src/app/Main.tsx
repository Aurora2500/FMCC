import { Container, Typography } from "@mui/material";
import React from "react";

const Main =  () => {
	return (
		<Container maxWidth="lg" sx={{mt: 5}}>
			<Typography
				variant="h3"
			>
				Sobre nosotros
			</Typography>
			<Typography paragraph
			>
				El hotel Lopesan Costa Meloneras Resort &amp;
				Spa es el lugar perfecto para disfrutar de unas vacaciones inolvidables.
				Este emblemático Resort se encuentra en Meloneras,
				la zona turística más exclusiva de la isla de Gran Canaria.
				Los sorprendentes parajes de la Reserva Natural de las Dunas de Maspalomas y su emblemático Boulevard,
				acompañado del icónico Faro de Maspalomas dotan al destino de un carácter único en el que poder soñar y
				relajarse mientras disfrutas de largos paseos junto al océano Atlántico.
				Nada más llegar al Lopesan Costa Meloneras Resort &amp; Spa,
				en el sur de Gran Canaria, nos recibe un majestuoso palacio,
				donde sus ventanas, puertas y pórticos trasladan a sus huéspedes a la época colonial,
				tan icónica en la arquitectura de las islas. Una vez atravesada la entrada,
				nos espera un exuberante jardin tropical de más de 76.000 m2 de superficie,
				con más de 800 palmeras, de 100 especies y subespeci es diferentes,
				que nos acompañarán hasta nuestra habitación y nos harán sentir en un oasis en medio de este paisaje desértico de dunas que se pierden en el mar.
				Todo está pensado para relajarnos, y experimentar un ambiente acogedor y cercano que cautiva al instante.
			</Typography>
		</Container>
	);
};

export default Main;
