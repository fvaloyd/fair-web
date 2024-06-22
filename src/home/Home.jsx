import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <>
      <h1>Bienvenido francis</h1>
      <button className="btn">Crear grupo</button>
      <table>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Periodo actual</th>
            <th scope="col">Monto general</th>
            <th scope="col">Monto contribuido</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"><Link to="/group/0575eb9d-3966-4e80-8aea-2a313a55e492/miembros">0575eb9d-3966-4e80-8aea-2a313a55e492</Link></th>
            <td>21 / 6 / 2024</td>
            <td>40000 $</td>
            <td>6000 $</td>
          </tr>
          <tr>
            <th scope="row"><Link to="/group/0575eb9d-3966-4e80-8aea-2a313a55e492/miembros">0575eb9d-3966-4e80-8aea-2a313a55e492</Link></th>
            <td>21 / 6 / 2024</td>
            <td>40000 $</td>
            <td>6000 $</td>
          </tr>
          <tr>
            <th scope="row"><Link to="/group/0575eb9d-3966-4e80-8aea-2a313a55e492/miembros">0575eb9d-3966-4e80-8aea-2a313a55e492</Link></th>
            <td>21 / 6 / 2024</td>
            <td>40000 $</td>
            <td>6000 $</td>
          </tr>
          <tr>
            <th scope="row"><Link to="/group/0575eb9d-3966-4e80-8aea-2a313a55e492/miembros">0575eb9d-3966-4e80-8aea-2a313a55e492</Link></th>
            <td>21 / 6 / 2024</td>
            <td>40000 $</td>
            <td>6000 $</td>
          </tr>
        </tbody>
      </table>
      <span className="pagination">&lt; &nbsp;&nbsp;1 &nbsp;&nbsp;| &nbsp;&nbsp;2 &nbsp;&nbsp;| &nbsp;&nbsp;3 &nbsp;&nbsp;&gt;</span>
    </>
  )
}
