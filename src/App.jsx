import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import * as Sentry from "@sentry/react"
// import {BrowserTracing} from "@sentry/browser"
import './App.css'

let release = 'react-sentry-git@0.0.1'

Sentry.init({
  dsn: "https://3e12a50ddb86f90334d18e8d0f2bb891@o4510100433403904.ingest.us.sentry.io/4510104988549120",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  // integrations: [new BrowserTracing()],
  release: release,
  endDefaultPii: true,
  tracesSampleRate: 1.0,
});

class ValidationError extends Error {
  constructor(message) {
    super(message); //(1)
    this.name = 'Error: "${message" from ${release} ';
  }

}

function App() {
  const [count, setCount] = useState(0)

  function handleClick(message) {
    throw new ValidationError(message);
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => {
          setCount((count) => count + 1)
          handleClick("San Diego, we have an error!")
        }
        }>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default Sentry.withProfiler(App)
