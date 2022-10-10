import { Masonry } from "@mui/lab";
import { Container, Divider, Typography, useMediaQuery } from "@mui/material";
import React from "react";

interface Image {
	url: string;
	title: string;
}

const images: Image[] = [
	{
		url: "https://www.doyouspain.com/cdn/cache7/img/info/ES/gran_canaria/guia-turistica1.jpg",
		title: "España",
	},
	{
		url: "https://www.turismotailandes.com/wp-content/uploads/2015/05/tailandia.jpg",
		title: "Tailandia",
	},
	{
		url: "https://media.iatiseguros.com/wp-content/uploads/2021/05/13100231/que-ver-republica-dominicana-3.jpg",
		title: "República Dominicana",
	},
	{
		url: "https://photo980x880.mnstatic.com/807bafdaeed88061afc72505c7eb173f/puerta-de-brandeburgo-3013021.jpg",
		title: "Alemania",
	},
	{
		url: "https://images.unsplash.com/photo-1597086831879-756db15e81d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8JTIwYXVzdHJpYXxlbnwwfHwwfHw%3D&w=1000&q=80",
		title: "Austria",
	},
	{
		url: "https://images.corendonresources.com/L1E9238A3W1024H684.jpg?v=210515020154",
		title: "Hotel",
	},
	{
		url: "https://images.theconversation.com/files/344247/original/file-20200626-104516-tplg33.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip",
		title: "Dunas",
	},
	{
		url: "https://stringfixer.com/files/952511.jpg",
		title: "Piscina",
	},
	{
		url: "https://www.lopesan.com/img/hotels/5862/600-1000-imagen-emblematica-hotel-faro-a-lopesan-collection-hotel-maspalomas-gran-canaria.jpg",
		title: "Faro",
	},
	{
		url: "https://www.travelandleisure.com/thmb/z58cxJrR_0MJRq2cePrO9KUnF9g=/1200x1200/smart/filters:no_upscale()/saud-beach-luzon-philippines-WRLDBEACH0421-15e2c368e7ad4495be803bd60cafa379.jpg",
		title: "Playa",
	},
	{
		url: "https://www.inturotel.com/content/imgsxml/es/galerias/block-listado/1/-gr24215321.jpg",
		title: "Spa",
	},
	{
		url: "https://blog.visitacostadelsol.com/hubfs/CDS%20-%20blogpost%20177%20a.jpg",
		title: "Masage",
	},
	{
		url: "https://nationaltoday.com/wp-content/uploads/2022/05/103-Disco-Day.jpg",
		title: "Disco",
	},
	{
		url: "https://gastronomiaycia.republica.com/wp-content/uploads/2021/12/lista_bar_2021_paradise-680x447.jpg",
		title: "Bar",
	},
	{
		url: "https://www.bitgab.com/uploads/1592788280-sunbathing-1592788280.jpg",
		title: "Baño de sol",
	},
	{
		url: "https://images.photowall.com/products/60742/palm-trees-on-white-beach.jpg?h=699&q=85",
		title: "Palmeras",
	}
];

const Main =  () => {

	const mw = useMediaQuery("(min-width: 800px)");

	return (
		<>
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
			<Divider sx={{my: 5}} />
			<Masonry columns={mw?4:3} spacing={2}>
				{images.map((image) => (
					<img key={image.title} src={image.url} alt={image.title} />
				))}
			</Masonry>
		</>
	);
};

export default Main;
