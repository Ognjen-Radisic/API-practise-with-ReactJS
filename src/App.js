import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import UserDesc from "./pages/UserDesc";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/users/:login">
					<UserDesc />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
