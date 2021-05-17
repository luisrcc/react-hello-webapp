import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import img1 from "../../img/StarWarsShip.jpeg";

const VehiCardList = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.getVehiApi();
	}, []);
	return (
		<div className="cards">
			{!!store.getVehi &&
				store.getVehi.map((item, index) => {
					return (
						<div
							className="card"
							key={index}
							style={{
								width: 300
							}}>
							<img className="card-img-top" src={img1} />
							<div className="card-body">
								<h4 className="card-title">{item.name}</h4>
								<Link
									to={"/viewShip/" + item.name}
									className="btn btn-primary"
									onClick={() => actions.getVehiApi(item.url)}>
									Learn More
								</Link>
								<a
									onClick={() => {
										actions.addfavorites(item.name);
									}}>
									<button type="button" className="btn btn-light btn-sm">
										{store.favorites.includes(item.name) ? (
											<i className="fas fa-heart fa-2x" style={{ color: "#F7DC6F" }} />
										) : (
											<i className="far fa-heart fa-2x" />
										)}
									</button>
								</a>
							</div>
						</div>
					);
				})}
		</div>
	);
};

export default VehiCardList;
