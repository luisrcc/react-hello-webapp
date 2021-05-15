import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../styles/home.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export const Characters = () => {
	const [data, setData] = useState(null);
	const { id } = useParams();

	// useEffect(
	// 	async () => {
	// 		const response = await fetch(`https://swapi.dev/api/people/${id}/`);
	// 		const json = await response.json();
	// 		const data = json;
	// 		console.log(data, "<--JSON Characters");

	// 		setData(data);
	// 	},
	// 	[id]
	// );

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch(`https://swapi.dev/api/people/${id}/`);
				const json = await response.json();
				const data = json;
				setData(data);
			} catch (e) {
				console.error(e);
			}
		}
		fetchData();
	}, []);

	if (!data) return null;
	return (
		<div className="container">
			<div className="row">
				<div className="col-6">
					<div>
						<img
							src="https://s2.glbimg.com/LttsvVoQZGHoIJsmdlXMULY336A=/e.glbimg.com/og/ed/f/original/2019/09/23/ea1e16061bdf92edb111d8808c6741a6.jpg"
							className="card-img-top"
							alt="Luke Skywalker"
						/>
					</div>
					<br />
				</div>
				<div className="col-6">
					<div>
						<h2 className="CharactersView" style={{ color: "red" }}>
							A long time ago in a galaxy far, far away....
						</h2>
					</div>
				</div>

				<table className="table table-dark">
					<thead className="thead-dark">
						<tr className="tr" style={{ textAlign: "center" }}>
							<th scope="col">Name</th>
							<th scope="col">Birth Year</th>
							<th scope="col">Gender</th>
							<th scope="col">Height</th>
							<th scope="col">Skin Color</th>
							<th scope="col">Eye Color</th>
						</tr>
					</thead>
					<tbody>
						<tr className="tr" style={{ textAlign: "center" }}>
							<th scope="row">{data.name}</th>
							<td>{data.birth_year}</td>
							<td>{data.gender}</td>
							<td>{data.height}</td>
							<td>{data.skin_color}</td>
							<td>{data.eye_color}</td>
						</tr>
					</tbody>
				</table>
			</div>
			<Link to="/">
				<span className="btn btn-primary btn-lg" role="button">
					Back to Star Wars Home
				</span>
			</Link>
		</div>
	);
};
