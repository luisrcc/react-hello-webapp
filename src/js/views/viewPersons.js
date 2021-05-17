import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useParams, Link } from "react-router-dom";
import PropType from "prop-types";
import BackToHome from "../component/BackToHome";

const viewPersons = ({ url, name, gender, hair_color, skin_color }) => {
	const { store, actions } = useContext(Context);
	const [data, setData] = useState(null);
	const params = useParams();

	useEffect(() => {
		actions.personDetailsApi(params.uid);
	}, []);

	return (
		<div className="container">
			{!!store.getPerson &&
				store.getPerson.map((item, index) => (
					<div className="row" key={index}>
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
								<li className="list-group-item">
									<strong>Name: </strong>
									{item.name}
								</li>
								<br />
								<p className="card-text">
									It is a long established fact that a reader will be distracted by the readable
									content of a page when looking at its layout. The point of using Lorem Ipsum is that
									it has a more or less normal distribution of letters, as opposed to using Content
									here, content here, making it look like readable English. Many desktop publishing
									packages and web page editors now use Lorem Ipsum as their default model text and a
									search for lorem ipsum will uncover many web sites still in their infancy. Various
									versions have evolved over the years, sometimes by accident, sometimes on purpose
									(injected humour and the like).
								</p>
								{/* <div>
									<ul className="list-group list-group-flush">
										<li className="list-group-item">
											<strong>Gender: </strong>
											{item.gender}
										</li>
										<li className="list-group-item">
											<strong>Hair Color: </strong>
											{item.hair_color}
										</li>
										<li className="list-group-item">
											<strong>Skin Color: </strong>
											{item.skin_color}
										</li>
									</ul>
								</div> */}
								{/* <Link>
									<BackToHome />
								</Link> */}
							</div>
						</div>
					</div>
				))}
		</div>
	);
};
viewPersons.propTypes = {
	name: PropType.string,
	gender: PropType.string,
	hair_color: PropType.string,
	skin_color: PropType.string,
	url: PropType.string
};

export default viewPersons;
