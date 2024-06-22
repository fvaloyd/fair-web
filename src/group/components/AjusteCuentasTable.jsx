export const AjusteCuentasTable = () => {
  return (
    <>
      <form>
        <label htmlFor="periodos">Periodo: </label>
        <select id="periodos" name="periodos">
          <option value="21/6/2024">21 / 6 / 2024</option>
          <option value="21/6/2024">21 / 5 / 2024</option>
          <option value="21/6/2024">21 / 4 / 2024</option>
          <option value="21/6/2024">21 / 3 / 2024</option>
        </select>&nbsp;
        <button>Buscar</button>
      </form>
      <table>
        <thead>
          <tr>
            <th scope="col">Miembro</th>
            <th scope="col">Accion</th>
            <th scope="col">Monto</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Francis</th>
            <td>Compensar</td>
            <td>400 $</td>
          </tr>
          <tr>
            <th scope="row">Jennifer</th>
            <td>Compensar</td>
            <td>200 $</td>
          </tr>
          <tr>
            <th scope="row">Emnny</th>
            <td>Recivir</td>
            <td>600 $</td>
          </tr>
        </tbody>
      </table>
      <span className="pagination">&lt; &nbsp;&nbsp;1 &nbsp;&nbsp;| &nbsp;&nbsp;2 &nbsp;&nbsp;| &nbsp;&nbsp;3 &nbsp;&nbsp;&gt;</span>
    </>
  )
}
