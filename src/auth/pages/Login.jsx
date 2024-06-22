import { Link, useNavigate } from 'react-router-dom'

export const Login = () => {
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/')
    }

    return (
        <>
            <h1>Iniciar sesion</h1>
            <form>
                <div>
                    <label className="label" htmlFor="identificador">Identificador</label>
                    <input id="identificador" type="text" name="identificador" placeholder="0575eb9d-3966-4e80-8aea-2a313a55e492" />
                </div>
                <button onClick={handleSubmit} className="btn">Entrar</button>
            </form>
            <Link to="/register">Registrarse</Link>
        </>
    )
}
