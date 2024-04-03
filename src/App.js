import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"
import About from "./screens/About/About.js"
import Contact from "./screens/Contact/Contact.js"
import Home from "./screens/Home/Home.js"
import Project from "./screens/Project/Project.js"

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/project' component={Project} />
				<Route exact path='/about' component={About} />
				<Route exact path='/contact' component={Contact} />
			</Switch>
		</Router>
	)
}

export default App
