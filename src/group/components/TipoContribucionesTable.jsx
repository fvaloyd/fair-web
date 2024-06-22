export const TipoContribucionesTable = () => {
  return (
    <>
      <button>Crear tipo contribucion</button>
      <table>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Nombre</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">0575eb9d-3966-4e80-8aea-2a313a55e492</th>
            <td>Gas</td>
          </tr>
          <tr>
            <th scope="row">0575eb9d-3966-4e80-8aea-2a313a55e492</th>
            <td>Luz</td>
          </tr>
          <tr>
            <th scope="row">0575eb9d-3966-4e80-8aea-2a313a55e492</th>
            <td>Supermercado</td>
          </tr>
        </tbody>
      </table>
      <span className="pagination">&lt; &nbsp;&nbsp;1 &nbsp;&nbsp;| &nbsp;&nbsp;2 &nbsp;&nbsp;| &nbsp;&nbsp;3 &nbsp;&nbsp;&gt;</span>
    </>
  )
}
