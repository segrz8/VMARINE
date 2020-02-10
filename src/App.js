import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import Header from './Header';
import Hamburger from './Hamburger';
import Menu from './Menu';
import Main from './Main';
import About from './About';
import Dockmate from './Dockmate';
import HavoSpark from './HavoSpark';
import Yachts from './Yachts';
import Cruises from './Cruises';
import Charter from './Charter';
import Assistance from './Assistance';
import Contact from './Contact';

class App extends React.Component {

	state = {
		menuActive: false,
	}

	handleMenu = () => {
		this.setState({
			menuActive: !this.state.menuActive,
		});
	}

	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<header>
						<Header />
					</header>
					<Hamburger
						menuActive={this.state.menuActive}
						handleMenu={this.handleMenu}
					/>
					<nav>
						<Menu
							menuActive={this.state.menuActive}
							handleMenu={this.handleMenu}
						/>
					</nav>
					<main>
						<Route exact path="/" component={Main} />
						<Route path="/about" component={About} />
						<Route path="/dockmate" component={Dockmate} />
						<Route path="/havospark" component={HavoSpark} />
						<Route path="/yachts" component={Yachts} />
						<Route path="/cruises" component={Cruises} />
						<Route path="/charter" component={Charter} />
						<Route path="/assistance" component={Assistance} />
						<Route path="/contact" component={Contact} />
					</main>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
