import React, { useContext } from "react";
import { Context } from "../store/appContext";

const Favorites = p => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			<div className="dropdown dropleft">
				<button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
					<span>{`Favorites ${store.favorites.length}`}</span>
				</button>
				<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					<ul>
						{store.favorites.length > 0 ? (
							store.favorites.map((item, index) => {
								return (
									<li key={index} className="dropdown-item" style={{ backgroundColor: "white" }}>
										{p.name}
										<h6 className="nameCharacters" style={{ color: "black" }}>
											{item}
											<button
												className="btn"
												onClick={() => {
													actions.removeFavorites(item);
												}}>
												<i className="fas fa-minus-circle" style={{ color: "red" }} />
											</button>
										</h6>
									</li>
								);
							})
						) : (
							<div className="dropdown-item">
								<p>Agrega Tus Favoritos</p>
							</div>
						)}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Favorites;
