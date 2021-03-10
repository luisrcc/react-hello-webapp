import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import PropsType from "prop-types";

const viewPersons = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		actions.personDetailsApi(params.uid);
	}, []);

	return (
		<div className="container">
			<div className="row">
				<div className="col-4">
					<img
						src="https://i.pinimg.com/originals/ef/fa/dd/effaddbf83f6e0bf0a0d24ec76e1e1eb.jpg"
						alt="imageDetails"
						style={{
							width: "300px",
							height: "500px"
						}}
					/>
				</div>
				<div className="col-8">
					<div className="card-body">
						<h5>{store.personDetailsApi ? store.personDetailsApi.name : ""}</h5>
						<p className="card-text">
							It is a long established fact that a reader will be distracted by the readable content of a
							page when looking at its layout. The point of using Lorem Ipsum is that it has a more or
							less normal distribution of letters, as opposed to using Content here, content here, making
							it look like readable English. Many desktop publishing packages and web page editors now use
							Lorem Ipsum as their default model text and a search for lorem ipsum will uncover many web
							sites still in their infancy. Various versions have evolved over the years, sometimes by
							accident, sometimes on purpose (injected humour and the like).
						</p>
						{/* <h4>{height}</h4> */}
						{/* <h4>{mass}</h4> */}
						{/* <h4>{hair_color}</h4> */}
						{/* <h4>{skin_color}</h4> */}
						{/* <h4>{gender}</h4> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default viewPersons;
