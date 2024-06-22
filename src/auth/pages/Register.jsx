import { Link } from "react-router-dom"

export const Register = () => {
    return (
        <>
            <h1>Registrarse</h1>
            <form>
                <div>
                    <label className="label" htmlFor="nombre">Nombre</label>
                    <input id="nombre" type="text" name="nombre" placeholder="Fulano" />
                </div>
                <button className="btn">Guardar</button>
            </form>
            <Link to="/login">Iniciar sesion</Link>
        </>
    )
}
