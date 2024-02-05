import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilValue, useRecoilState } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom, totalNotificationsSelector } from './atoms'

function App() {
  return(
    <RecoilRoot>
      <MainApp/>
    </RecoilRoot>
  )
}

function MainApp(){
  const networkAtomCount = useRecoilValue(networkAtom)
  const jobsAtomCount = useRecoilValue(jobsAtom)
  const messagingAtomCount = useRecoilValue(messagingAtom)
  const notificationsAtomCount = useRecoilValue(notificationsAtom)
  const totalNotificationsCount = useRecoilValue(totalNotificationsSelector)

  return (
    <>
      <button>Home</button>

      <button>My network ({networkAtomCount>100 ? "99+":networkAtomCount})</button>
      <button>Jobs ({jobsAtomCount})</button>
      <button>Messaging ({messagingAtomCount})</button>
      <button>Notifications ({notificationsAtomCount})</button>

      <button>Me({totalNotificationsCount})</button>
    </>
  )
}

export default App
