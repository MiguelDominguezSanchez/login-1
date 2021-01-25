import React from 'react';

const Login = () => {
	const [email, setEmail] = React.useState('');
	const [pass, setPass] = React.useState('');

	const procesarDatos = (e) => {
		e.preventDefault();
		if (!email.trim()) {
			console.log('Ingrese Email');
			return;
		}
		if (!pass.trim()) {
			console.log('Ingrese Password');
			return;
		}
		if (pass.length < 6) {
			console.log('Password mayor a 6 carácters');
			return;
		}
		console.log('Pasando todas las validaciones');
	};

	return (
		<div className="mt-5">
			<h3 className="text-center">Registro de tareas</h3>
			<hr />
			<div className="row justify-content-center">
				<div className="col-12 col-sm-8 col-md-6 col-xl-4">
					<form onSubmit={procesarDatos}>
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
						<button className="btn-dark btn-lg btn-block">Registrase</button>
						<button className="btn btn-info btn-sm btn-block">
							¿Ya tiene cuenta?
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
