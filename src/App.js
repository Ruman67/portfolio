import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Contact from './Components/Contact/Contact';
import Resume from './Components/Resume/ResumeIn';
import Home from './Components/Home';
import Services from './Components/Services/Services';
import About from './Components/About/About';
function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home/>} />
					<Route path="/services" element={<Services/>} />
				    <Route path="/about" element={<About/>}/>
					<Route path="/contact" element={<Contact />} />
					<Route path="/resume" element={<Resume />}/>
				</Routes>
			</Router>
		</>
	);
}

export default App;