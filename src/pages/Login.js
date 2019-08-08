import React, { useState } from 'react';
import './Login.css'

import logo from '../assets/logo.svg'

import api from '../services/api'

export default function Login({ history }) {
	const [username, setUsername] = useState('');

	async function handleSubmit(e) {
		e.preventDefault();

		// precisa apenas do /devs por conta da configuracao do axios
		// baseURL passada em services/api.js
		const response = await api.post('/devs', {
			// como a variavel username tem o nome igual ao valor username
			// nao eh necessario declarar no objeto username: username
			// por conta da Shot Sintax do ES6
			username,
		});

		const { _id } = response.data;

		// direciona o navegador para a pagina /main
		history.push(`/dev/${_id}`);
	}

	return (
		<div className="login-container">
			<form onSubmit={handleSubmit}>
				<img src={logo} alt="Tindev" />
				<input
					placeholder="Digite seu usuário no Github"
					value={username}
					onChange={e => setUsername(e.target.value)}
				/>
				<button type="submit">Enviar</button>
			</form>
		</div>
	);
}

