const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			getPerson: [],
			getVehi: [],
			getPlanet: [],
			favorites: [],
			characterDetail: {},
			vehicleDetails: [],
			planetDetails: []
		},
		actions: {
			getPersonApi: async () => {
				const settings = {
					method: "GET",
					headers: {
						"Content-Type": "application.json"
					}
				};
				const response = await fetch("https://www.swapi.tech/api/people/", settings);
				const json = await response.json();

				console.log(json, "<-Aqui");

				setStore({ getPerson: json.results });
			},

			getVehiApi: async () => {
				const settings = {
					method: "GET",
					headers: {
						"Content-Type": "application.json"
					}
				};
				const response = await fetch("https://www.swapi.tech/api/starships", settings);
				const json = await response.json();

				setStore({ getVehi: json.results });
			},

			getPlanetApi: async () => {
				const settings = {
					method: "GET",
					headers: {
						"Content-Type": "application.json"
					}
				};
				const response = await fetch("https://www.swapi.tech/api/planets", settings);
				const json = await response.json();

				setStore({ getPlanet: json.results });
			},

			// getCharacterDetail: async id => {
			// 	const settings = {
			// 		method: "GET",
			// 		headers: {
			// 			"Content-Type": "application/json"
			// 		}
			// 	};
			// 	const response = await fetch(`https://www.swapi.tech/api/people/${id}`, settings);
			// 	const json = await response.json();
			// 	setStore({ characterDetail: json.result });
			// },

			addfavorites: item => {
				const store = getStore();
				setStore({ favorites: [...store.favorites, item] });
			},
			removeFavorites: item => {
				console.log(item);
				const store = getStore();
				const removeName = store.favorites.filter(name => name !== item);
				setStore({ favorites: removeName });
				console.log(store.favorites);
			}
		}
	};
};

export default getState;
