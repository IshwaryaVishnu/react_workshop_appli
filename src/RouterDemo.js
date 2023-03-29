import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Person from "./components/Person";

function RouterDemo() {

	return (
		<>
			<BrowserRouter>
				<div style={{
					display: "flex",
					background: 'black',
					padding: '5px 0 5px 5px',
					fontSize: '20px'
				}}>
					<div style={{ margin: '10px' }}>
						<NavLink to="/" style={({ isActive }) => ({
							color: isActive ? 'greenyellow' : 'white' })}>
							Home
						</NavLink>
					</div>
					<div style={{ margin: '10px' }}>
						<NavLink to="/about" style={({ isActive }) => ({
							color: isActive ? 'greenyellow' : 'white' })}>
							About
						</NavLink>
					</div>
					<div style={{ margin: '10px' }}>
						<NavLink to="/person" style={({ isActive }) => ({
							color: isActive ? 'greenyellow' : 'white' })}>
							Person
						</NavLink>
					</div>
				</div>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/about" element={<About />} />
					<Route exact path="/person" element={<Person />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default RouterDemo;
