
export type Services
	= "Hot Tub"
	| "Phone"
	| "Wifi"
	| "TV"
	| "Bar"
	| "Breakfast"
	;

export interface Room {
	name: string;
	image: string;
	description: string;
	price: number;
	beds: number;
	size: number;
	services: Services[];
}

export const availableRooms: Room[] = [
	{
		name: "Family Room",
		description: "Una habitación con una cama doble y una cama individual. Perfecta para familias.",
		image: "https://images.unsplash.com/photo-1579622340929-8c7f8f9b9b0c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80https://www.lopesan.com/img/hotels/4981/494-1000-1000-1000-habitacion-family-room-lopesan-costa-meloneras-resort-spa-gran-canaria.jpg",
		price: 275,
		beds: 3,
		size: 40,
		services: ["Hot Tub", "Phone", "Wifi", "TV"],
	}
];
