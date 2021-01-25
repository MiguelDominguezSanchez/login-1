import React from 'react';

const Login = () => {
	return (
		<div className="mt-5">
			<h3 className="text-center">Acceso o registro de tareas</h3>
			<hr />
			<div className="row justify-content-center">
				<div className="col-12 col-sm-8 col-md-6 col-xl-4">
					<form>
						<input
							type="email"
							className="form-control mb-2"
							placeholder="Ingrese un email"
						/>
						<input
							type="password"
							className="form-control mb-2"
							placeholder="Ingrese un password"
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
