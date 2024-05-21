import React, { Suspense, lazy, useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { CountContext } from './Context'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { countAtom, evenSelector } from './store/atoms/count'

const Dashboard = lazy(() => import('./components/Dashboard'))
const Landing = lazy(() => import('./components/Landing'))

function App() {
  return (
    <RecoilRoot>
      <Count />
    </RecoilRoot>
  )
}

function Count() {
  console.log("Count re-rendered...")
  return (
    <div>
      <CountRendered />
      <Buttons />
    </div>
  )
}

function CountRendered() {
  const count = useRecoilValue(countAtom);
  const isEven = useRecoilValue(evenSelector);

  return <div>
    Count: {count}
    <div>{isEven ? "Number is Even" : " "}</div>
  </div>
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom)
  return (
    <div>
      <button onClick={() => setCount(prev => prev + 1)}>Increase</button>
      <button onClick={() => setCount(prev => prev - 1)}>Decrease</button>
    </div>
  );
}

export default App