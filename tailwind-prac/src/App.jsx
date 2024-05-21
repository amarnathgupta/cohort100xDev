import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RevenueCard from './components/RevenueCard'
import Paybar from './components/Paybar'
import PayWindow from './components/PayWindow'
import Navbar from './components/Navbar'
import Lower from './components/Lower'
import Sidebar from './components/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='grid grid-cols-10'>
      <div className='col-span-2 hidden xl:inline-block h-max sticky overflow-hidden '>          
        <Sidebar />
      </div>
      <div className='col-span-10 xl:col-span-8 flex flex-col justify-between gap-8 px-8 font-poppins w-full overflow-y-auto '>
        <Navbar />
        <PayWindow />
        <Lower />
      </div>
    </div>
  )
}

export default App
