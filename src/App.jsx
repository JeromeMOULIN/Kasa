import '@/App.css'
import Header from '@components/public/header'
import Footer from '@components/public/footer'
import { Outlet } from 'react-router-dom'

import './app.css'


function App() {

  return (
    <>
      <Header />

      <Outlet/>

      <Footer />
    </>
  )
}

export default App
