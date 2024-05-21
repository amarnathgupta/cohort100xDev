import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { allCountAtom, notifications } from './atoms'
import axios from 'axios'

function App() {

  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  )
}

function MainApp() {
  
  const [notification, setNotification] = useRecoilState(notifications)
  const allCount = useRecoilValue(allCountAtom);

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/notifications")
    .then(res => setNotification(res.data));
  }, [])

  const networkCount = notification.network;
  const jobsCount = notification.jobs;
  const messageCount = notification.messaging;
  const notificationCount = notification.notifications

  return (
    <>
      <button>Home</button>

      <button>My Network ({networkCount > 99 ? "99+" : networkCount})</button>
      <button>Jobs ({jobsCount > 99 ? "99+" : jobsCount})</button>
      <button>Message ({messageCount > 99 ? "99+" : messageCount})</button>
      <button>Notifications ({notificationCount > 99 ? "99+" : notificationCount})</button>

      <button >Me ({allCount})</button>
    </>
  );
}

export default App
