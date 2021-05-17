import React, { useState, useEffect } from "react";
import { useParams, withRouter } from "react-router-dom";
import Link from "react-dom";
import BackToHome from "../component/BackToHome";

function viewPerson2(props) {
	const { id } = useParams();
	const [person, setPerson] = useState({});

	const url = `http://swapi.dev/api/planets/${id}/`;

	const getPerson = async () => {
		try {
			const response = await fetch(url);
			const data = await response.json();
			console.log(data);
			setPerson(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getPerson();
	}, []);

	// const EnviarAtras = () => {
	// 	props.goBack();
	// };

	return (
		<div className="row d-flex justify-content-center mt-5">
			<div className="col-md-8  d-flex flex-md-grow justify-content-start">
				<div className="card col-md-6" style={{ width: "18rem" }}>
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR776tS4HckzIxCTwFFuPFx6-puhOQSXAUhgg&usqp=CAU"
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
							<b>{person.name}</b>
						</h5>
						<p className="card-text">
							<u>Height:</u> {person.height}
						</p>
						<p className="card-text">
							{" "}
							<u>Mass:</u> {person.mass}
						</p>
						<p className="card-text">
							<u>Hair Color:</u> {person.hair_color}
						</p>
						<p className="card-text">
							<u>Skin Color:</u> {person.skin_color}
						</p>
						<p className="card-text">
							<u>Eye Color:</u> {person.eye_color}
						</p>
						<p className="card-text">
							<u>Birth Year:</u> {person.birth_year}
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

export default viewPerson2;
