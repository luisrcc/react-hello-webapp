import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

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
							<img
								className="card-img-top"
								src="https://static.wikia.nocookie.net/starwars/images/1/1c/Liberator-HSCK.png/revision/latest?cb=20191130194708"
							/>
							<div className="card-body">
								<h4 className="card-title">{item.name}</h4>
								<Link
									to={"/viewPersons/" + item.name}
									className="btn btn-primary"
									onClick={() => actions.getPersonApi(item.url)}>
									Learn More
								</Link>
								<a
									onClick={() => {
										actions.addfavorites(item.name);
									}}>
									<button type="button" className="btn btn-light btn-sm">
										<i className="far fa-heart fa-2x" />
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
