import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import PersonCardList from "./component/cardPersons";
import VehiCardList from "./component/cardVehi";
import PlanetCardList from "./component/cardPlanet";
import "../styles/style.css";
import viewPersons2 from "./views/viewPersons2";
import viewPlanet from "./views/viewPlanet";
import viewShip from "./views/viewStarship";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<div className="container">
								<PersonCardList />
								<br />
							</div>
							<div className="container">
								<VehiCardList />

								<br />
							</div>
							<div className="container">
								<PlanetCardList />
								<br />
							</div>
						</Route>
						<Route exact path="/viewPersons2/:id" component={viewPersons2} />
						<Route exact path="/viewShip/:id" component={viewShip} />
						<Route exact path="/viewPlanet/:id" component={viewPlanet} />
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
