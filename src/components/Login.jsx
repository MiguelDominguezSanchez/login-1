import React from 'react';
import { auth, db } from '../firebase';
import { withRouter } from 'react-router-dom';

const Login = (props) => {
	const [email, setEmail] = React.useState('');
	const [pass, setPass] = React.useState('');
	const [error, setError] = React.useState(null);
	const [esRegistro, setEsRegistro] = React.useState(false);

	const procesarDatos = (e) => {
		e.preventDefault();
		if (!email.trim()) {
			// console.log('Ingrese Email');
			setError('Ingrese Email');
			return;
		}
		if (!pass.trim()) {
			// console.log('Ingrese Password');
			setError('Ingrese Password');
			return;
		}
		if (pass.length < 6) {
			// console.log('Password mayor a 6 caracters');
			setError('Password de 6 caracters o más');
			return;
		}
		console.log('correcto...');
		setError(null);

		if (esRegistro) {
			registrar();
		} else {
			Login();
		}
	};

	const login = React.useCallback(async () => {
		try {
			const res = await auth.signInWithEmailAndPassword();
			console.log(res.users);
			setEmail('');
			setPass('');
			setError(null);
			props.history.push('/admin');
		} catch (error) {
			console.log(error);
			if (error.code === 'auth/invalid-email') {
				setError('Email no valido');
			}
			if (error.code === 'auth/user-not-found') {
				setError('Email no registrado');
			}
			if (error.code === 'auth/user-not-password') {
				setError('Contraseña incorrecta');
			}
		}
	}, [email, pass, props.history]);

	const registrar = React.useCallback(async () => {
		try {
			const res = await auth.createUserWithEmailAndPassword(email, pass);
			await db.collection('usuarios').doc(res.user.email).set({
				email: res.user.email,
				uid: res.user.uid,
			});
		} catch (error) {
			// console.log(error);
			// if (error.code === 'auth/invalid-email') setError('Email no valido');
		}
		// if (error.code === 'auth/email-already-in-use')
		// 	setError('Email ya utilizado');
	}, [email, pass]);

	return (
		<div className="mt-5">
			<h3 className="text-center">{esRegistro ? 'Registro' : 'Login'}</h3>
			<hr />
			<div className="row justify-content-center">
				<div className="col-12 col-sm-8 col-md-6 col-xl-4">
					<form onSubmit={procesarDatos}>
						{error && <div className="alert alert-danger">{error}</div>}
						<input
							type="email"
							className="form-control mb-2"
							placeholder="Ingrese un email"
							onChange={(e) => setEmail(e.target.value)}
							value={email}
						/>
						<input
							type="password"
							className="form-control mb-2"
							placeholder="Ingrese un password"
							onChange={(e) => setPass(e.target.value)}
							value={pass}
						/>
						<button className="btn-dark btn-lg btn-block" type="submit">
							{esRegistro ? 'Registrar' : 'Acceder'}
						</button>
						<button
							className="btn btn-info btn-sm btn-block"
							onClick={() => setEsRegistro(!esRegistro)}
							type="button"
						>
							{esRegistro ? '¿Ya estas registrado?' : '¿No tienes cuenta?'}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default withRouter(Login);
