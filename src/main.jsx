import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

import { Login, Register } from './auth/index.js'
import { Home } from './home/Home.jsx'
import { GroupLayout, MiembrosTable, ContribucionesTable, TipoContribucionesTable, AjusteCuentasTable } from './group'

import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/store.js'

const router = createBrowserRouter([
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'register',
    element: <Register />,
  },
  {
    path: '/',
    element: <Home />
  },
  {
    element: <GroupLayout />,
    children: [
      {
        path: 'group/:groupId/miembros',
        element: <MiembrosTable />
      },
      {
        path: 'group/:groupId/contribuciones',
        element: <ContribucionesTable />
      },
      {
        path: 'group/:groupId/tipo-contribuciones',
        element: <TipoContribucionesTable />
      },
      {
        path: 'group/:groupId/ajuste-cuentas',
        element: <AjusteCuentasTable />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
