import { createRoot } from 'react-dom/client'
import './index.css'
import { store } from './redux/store.js'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import router from './router/router.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>,
)
