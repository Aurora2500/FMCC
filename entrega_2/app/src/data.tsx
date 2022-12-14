import React from "react";
import { Bathtub, LocalBar, Phone, Restaurant, Tv, Wifi } from "@mui/icons-material";

export type Services
	= "Hot Tub"
	| "Phone"
	| "Wifi"
	| "TV"
	| "Bar"
	| "Breakfast"
	;

export const ServiceIcon: React.FC<{service: Services}> = ({service}) => {
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


export interface Room {
	name: string;
	id: string;
	image: string;
	description: string;
	price: number;
	beds: number;
	size: number;
	services: Services[];
}

export const availableRoomMap: Record<string, Room> = {
	"family": {
		name: "Family Room",
		id: "family",
		description: "Una habitación con una cama doble y una cama individual. Perfecta para familias.",
		image: "https://www.grancanariaregional.com/wp-content/uploads/2018/10/altamar-room-with-view.jpg",
		price: 275,
		beds: 2,
		size: 40,
		services: ["Hot Tub", "Phone", "Wifi", "TV"],
	},
	"luxury": {
		name: "Luxury room",
		id: "luxury",
		description: "Una habitación con cama doble para disfrutar con lujo.",
		image: "https://www.theakyra.com/files/2715/7104/5077/Serviced_Apartment_Hotel_Stay.jpg",
		price: 300,
		beds: 1,
		size: 50,
		services: ["Hot Tub", "Phone", "Wifi", "TV", "Bar", "Breakfast"],
	},
	"deluxe": {
		name: "Deluxe",
		id: "deluxe",
		description: "Una habitación con cama doble para disfrutar de las vacaciones.",
		image: "https://www.lopesan.com/img/hotels/4981/494-1000-1000-1000-habitacion-family-room-lopesan-costa-meloneras-resort-spa-gran-canaria.jpg",
		price: 275,
		beds: 1,
		size: 40,
		services: ["Hot Tub", "Phone", "Wifi", "TV", "Bar", "Breakfast"],
	},
	"suite": {
		name: "Suite",
		id: "suite",
		description: "Una habitación suite.",
		image: "https://www.lopesan.com/img/hotels/4998/494-1000-1000-1000-sala-habitacion-suite-lopesan-costa-meloneras-resort-spa-gran-canaria.jpg",
		price: 390,
		size: 63,
		beds: 1,
		services: ["Hot Tub", "Phone", "Wifi", "TV", "Bar", "Breakfast"],
	},
	"business": {
		name: "Business",
		id: "business",
		description: "Una habitación para estancias de negocios.",
		image: "https://www.legacybangkok.com/en/media/img/executive/ex-1.jpg",
		price: 400,
		size: 40,
		beds: 1,
		services: ["Hot Tub", "Phone", "Wifi", "TV", "Bar", "Breakfast"],
	},
	"apartment": {
		name: "Apartamento",
		id: "apartment",
		description: "Una habitación estilo apartamento para estancias más largas.",
		image: "https://assets-news.housing.com/news/wp-content/uploads/2020/06/24181135/Everything-you-need-to-know-about-studio-apartments-FB-1200x700-compressed.jpg",
		price: 200,
		size: 45,
		beds: 1,
		services: ["Hot Tub", "Phone", "Wifi", "TV"],
	}
};

export const availableRooms: Room[] = Object.values(availableRoomMap);