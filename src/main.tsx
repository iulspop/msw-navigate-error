import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

async function enableMocking() {
  console.log('Enabling mocks')
  const worker = await Promise.all([import('msw/browser'), import('./handlers')]).then(
    ([{ setupWorker }, { handlers }]) => {
      console.log('Setting up worker')
      return setupWorker(...handlers)
    }
  )

  console.log('Starting worker')
  return worker.start()
}

enableMocking().then(() => ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
))
