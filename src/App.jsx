import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'

function App() {
  return (
    <Routes>
      <Route element={<Home></Home>} path='/'></Route>
      <Route element={<Home></Home>} path='/home'></Route>
      <Route element={<Login></Login>} path='/login'></Route>
    </Routes>
  )
}

export default App