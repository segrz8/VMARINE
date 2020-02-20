import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Header from './Header';
import Hamburger from './Hamburger';
import Menu from './Menu';
import About from './About';
import Dockmate from './Dockmate';
import HavoSpark from './HavoSpark';
import Fendertex from './Fendertex';
import Rescue from './Rescue';
import Yachts from './Yachts';
import Cruises from './Cruises';
import Poland from './Poland';
import Croatia from './Croatia';
import Assistance from './Assistance';
import Contact from './Contact';
import ScrollToTop from 'react-router-scroll-top';

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
			<BrowserRouter basename={process.env.PUBLIC_URL}>
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
						<ScrollToTop>
							<Route exact path="/" component={About} />
							<Route path="/dockmate" component={Dockmate} />
							<Route path="/havospark" component={HavoSpark} />
							<Route path="/fendertex" component={Fendertex} />
							<Route path="/rescue" component={Rescue} />
							<Route path="/yachts" component={Yachts} />
							<Route path="/cruises" component={Cruises} />
							<Route path="/poland" component={Poland} />
							<Route path="/croatia" component={Croatia} />
							<Route path="/assistance" component={Assistance} />
							<Route path="/contact" component={Contact} />
						</ScrollToTop>
					</main>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
