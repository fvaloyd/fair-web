import { Link } from "react-router-dom"
import { useParams, Outlet, NavLink } from "react-router-dom"

export const GroupLayout = () => {
  const { groupId } = useParams()
  return (
    <div className="group-layout">
      <nav>
        <ul>
          <li>
            <Link className="home-link" to="/">Home</Link>
          </li>
          <li><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          } to={`/group/${groupId}/miembros`}>Miembros</NavLink></li>
          <li><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          } to={`/group/${groupId}/contribuciones`}>Contribuciones</NavLink></li>
          <li><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          } to={`/group/${groupId}/tipo-contribuciones`}>Tipo Contribuciones</NavLink></li>
          <li><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          } to={`/group/${groupId}/ajuste-cuentas`}>Ajuste de cuentas</NavLink></li>
        </ul>
        <div className="groupId">
          <span>{groupId}</span>
        </div>
      </nav>

      <section>
        <div className="desc">
          <span>Periodo actual: </span><span><strong>21 / 6 / 2024</strong></span>
        </div>
        <div className="desc">
          <span>Monto: </span><span><strong>40000 $</strong></span>
        </div>
        <div className="desc">
          <button>Iniciar nuevo periodo</button>&nbsp;
          <button>Ajustar cuentas</button>
        </div>
      </section>

      <section className="group-content">
        <Outlet />
      </section>
    </div>
  )
}
