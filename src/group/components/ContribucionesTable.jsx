export const ContribucionesTable = () => {
  return (
    <>
      <button>Hacer contribucion</button>
      <table>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Miembro</th>
            <th scope="col">Contribucion</th>
            <th scope="col">Monto</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">0575eb9d-3966-4e80-8aea-2a313a55e492</th>
            <td>Francis</td>
            <td>Supermercado</td>
            <td>6000 $</td>
          </tr>
          <tr>
            <th scope="row">0575eb9d-3966-4e80-8aea-2a313a55e492</th>
            <td>Emnny</td>
            <td>Supermercado</td>
            <td>6000 $</td>
          </tr>
          <tr>
            <th scope="row">0575eb9d-3966-4e80-8aea-2a313a55e492</th>
            <td>Jennifer</td>
            <td>Supermercado</td>
            <td>6000 $</td>
          </tr>
        </tbody>
      </table>
      <span className="pagination">&lt; &nbsp;&nbsp;1 &nbsp;&nbsp;| &nbsp;&nbsp;2 &nbsp;&nbsp;| &nbsp;&nbsp;3 &nbsp;&nbsp;&gt;</span>
    </>
  )
}
