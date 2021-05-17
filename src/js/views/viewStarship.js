import React, { useState, useEffect } from "react";
import { useParams, withRouter } from "react-router-dom";
import Link from "react-dom";
import BackToHome from "../component/BackToHome";
import img1 from "../../img/StarWarsShip.jpeg";

function viewShip(props) {
	const { id } = useParams();
	const [ship, setShip] = useState({});

	const url = `http://swapi.dev/api/planets/${id}/`;

	const getStarShip = async () => {
		try {
			const response = await fetch(url);
			const data = await response.json();
			console.log(data);
			setShip(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getStarShip();
	}, []);

	// const EnviarAtras = () => {
	// 	props.goBack();
	// };

	return (
		<div className="row d-flex justify-content-center mt-5">
			<div className="col-md-8  d-flex flex-md-grow justify-content-start">
				<div className="card col-md-6" style={{ width: "18rem" }}>
					<img
						src={img1}
						className="card-img-top mt-3"
						alt="imagen de prueba"
						onError={e => {
							e.target.onerror = null;
							e.target.src = Imagen;
						}}
					/>
				</div>
				<div className="card col-md-6 ml-3" style={{ width: "18rem" }}>
					<div className="card-body">
						<h5 className="card-title">
							<b>{ship.name}</b>
						</h5>
						<p className="card-text">
							<u>Model:</u> {ship.model}
						</p>
						<p className="card-text">
							{" "}
							<u>Manufacturer:</u> {ship.manufacturer}
						</p>
						<p className="card-text">
							<u>Cost in Credits:</u> {ship.cost_in_credits}
						</p>
						<p className="card-text">
							<u>Length:</u> {ship.length}
						</p>
						<p className="card-text">
							<u>Max Atmosphering Speed:</u> {ship.max_atmosphering_speed}
						</p>
					</div>
				</div>
			</div>
			<div>{/* <Link to="/" className="btn btn-primary">
					Back to Home
				</Link> */}</div>
		</div>
	);
}

export default viewShip;
