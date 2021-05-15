import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const PersonCardList = p => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.getPersonApi();
	}, []);
	const [selected, setSelected] = useState({
		heart: "far fa-heart fa-2x"
	});
	//console.log(store.favorites);
	return (
		<div className="cards">
			{!!store.getPerson &&
				store.getPerson.map((item, index) => (
					<div
						className="card"
						key={index}
						style={{
							width: "300px"
						}}>
						<img
							className="card-img-top"
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR776tS4HckzIxCTwFFuPFx6-puhOQSXAUhgg&usqp=CAU"
							alt="Card image"
						/>
						<div className="card-body">
							<h4 className="card-title">{item.name}</h4>
							<Link
								to={"/viewPersons2/" + item.name}
								className="btn btn-primary"
								onClick={() => actions.getPersonApi(item.url)}>
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
				))}
		</div>
	);
};

export default PersonCardList;
