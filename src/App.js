import NavBar from './components/NavBar/NavBar.component';
import { Routes, Route, useLocation } from "react-router-dom"
import { Suspense, lazy, useContext } from "react"
import { AuthContext } from "./context/AuthContext";

//import loading
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner.component';

//import con lazy per migliorare la performance
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage.page'))
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'))
const ChiamateEff=lazy(()=>import('./pages/ChiamateEffetuate/ChiamateEff'))
const GestoreChiamate=lazy(()=>import('./pages/GestoreChiamate/GestoreChiamate.component'))

const App = () => {
  const { pathname } = useLocation()
  const { user } = useContext(AuthContext);
  return (
    <div className='App'> 
      <NavBar linkAttuale = { pathname }/>
      <Suspense fallback={<LoadingSpinner/>}>
        <Routes>
          <Route path='/' element={ user ? <GestoreChiamate/> : <LoginPage/>} />
          <Route path='/register' element = {  <RegisterPage/>} />
          <Route path='/chiamate-effettuate' element = { user ? <ChiamateEff/> : <LoginPage/> } />
          <Route path='*' element = { <span>Page not found</span> }/> 
        </Routes>
      </Suspense>
    </div>
  )
}

export default App;