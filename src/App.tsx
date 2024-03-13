import './global.css';
import AuthLayout from './auth/AuthLayout';
import SigninForm from './auth/forms/SigninForm';
import SignupForm from './auth/forms/SignupForm';
import RootLayout from './root/RootLayout';
import { Home } from './root/pages';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
     <main className='flex h-screen'>
      <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>
        <Routes>
          {/* public Routes */}
          <Route element={<AuthLayout />}>
          <Route path='/sign-in' element={<SigninForm />} />
          <Route path='/sign-up' element={<SignupForm />} />
          </Route>
          {/* private Routes  */}
          
          <Route element={<RootLayout />}>
          <Route index element={<Home/>} />
          </Route>
          
        </Routes>
     </main>
  )
}

export default App