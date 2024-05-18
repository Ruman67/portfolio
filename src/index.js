import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './GlobalStyle';
import reportWebVitals from './reportWebVitals';
import Home from './Components/Home';
import Footer from './Components/Footer';

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle />
		<App />
    <Home/>
	
	<Footer/>

	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();