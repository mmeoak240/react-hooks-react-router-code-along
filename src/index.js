import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";

const linkStyles = {
	display: "inline-block",
	width: "50px",
	padding: "12px",
	margin: "0 6px 6px",
	background: "blue",
	textDecoration: "none",
	color: "white",
};

function NavBar() {
	return (
		<div>
			<NavLink
				to="/"
				exact
				style={linkStyles}
				activeStyle={{
					background: "darkblue",
				}}
			>
				Home
			</NavLink>
			<NavLink
				to="/about"
				exact
				style={linkStyles}
				activeStyle={{
					background: "darkblue",
				}}
			>
				About
			</NavLink>
			<NavLink
				to="/login"
				exact
				style={linkStyles}
				activeStyle={{
					background: "darkblue",
				}}
			>
				Login
			</NavLink>
			<NavLink
				to="/signup"
				exact
				style={linkStyles}
				activeStyle={{
					backgroun: "darkblue",
				}}
			>
				Sign-Up
			</NavLink>
			<NavLink
				to="/messages"
				exact
				style={linkStyles}
				activeStyle={{
					backgroun: "darkblue",
				}}
			>
				Messages
			</NavLink>
		</div>
	);
}

function Home() {
	return (
		<div>
			<h1>Home!</h1>
		</div>
	);
}

function About() {
	return (
		<div>
			<h1>This is my about component!</h1>
		</div>
	);
}

function Login() {
	return (
		<div>
			<h1>Login</h1>
			<form>
				<div>
					<input type="text" name="username" placeholder="Username" />
				</div>
				<div>
					<input type="password" name="password" placeholder="Password" />
				</div>
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
}

function SignUp() {
	return <h2>Sign-up Today!</h2>;
}

function Messages() {
	return <h2>Here are your messages for the day</h2>;
}

function App() {
	return (
		<div>
			<NavBar />
			<Switch>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/signup">
					<SignUp />
				</Route>
				<Route exact path="/messages">
					<Messages />
				</Route>
			</Switch>
		</div>
	);
}

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById("root")
);
