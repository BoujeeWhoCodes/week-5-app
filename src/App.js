
import React from 'react';
import Weather from './Weather';
import './App.css';

export default function App() {
	return (
		<div className='App'>
			<div className='container'>
				<Weather defaultCity='New York' />
				<footer>
					This project was coded by <a href='/'>Bougie</a> and is{' '}
					<a
						href='https://github.com/BoujeeWhoCodes/week-5-app'
						target='_blank'
						rel='noopener noreferrer'
					>
						open-sourced on Github
					</a>
				</footer>
			</div>
		</div>
	);
}
