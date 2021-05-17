import React, { useState, useEffect } from "react";
import { useParams, withRouter } from "react-router-dom";
import Link from "react-dom";
import BackToHome from "../component/BackToHome";

function viewPlanet(props) {
	const { id } = useParams();
	const [planet, setPlanet] = useState({});

	const url = `http://swapi.dev/api/planets/${id}/`;

	const getPlanet = async () => {
		try {
			const response = await fetch(url);
			const data = await response.json();
			console.log(data);
			setPlanet(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getPlanet();
	}, []);

	// const EnviarAtras = () => {
	// 	props.goBack();
	// };

	return (
		<div className="row d-flex justify-content-center mt-5">
			<div className="col-md-8  d-flex flex-md-grow justify-content-start">
				<div className="card col-md-6" style={{ width: "18rem" }}>
					<img
						src="https://img.unocero.com/2020/01/nasa-descubre-planeta-tatooine.jpg"
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
							<b>{planet.name}</b>
						</h5>
						<p className="card-text">
							<u>Rotation:</u> {planet.rotation_period}
						</p>
						<p className="card-text">
							{" "}
							<u>Orbital:</u> {planet.orbital_period}
						</p>
						<p className="card-text">
							<u>Diameter:</u> {planet.diameter}
						</p>
						<p className="card-text">
							<u>Climate:</u> {planet.climate}
						</p>
						<p className="card-text">
							<u>Gravity:</u> {planet.gravity}
						</p>
						<p className="card-text">
							<u>Terrain:</u> {planet.terrain}
						</p>
						<p className="card-text">
							<u>Surface Water:</u> {planet.surface_water}
						</p>
					</div>
				</div>
			</div>
			{/* <div>
                <button className="btn btn-primary" to="/">
                    Back to Home
			</button>
            </div> */}
		</div>
	);
}

export default viewPlanet;
