import React from 'react'
import ReactDOM from 'react-dom/client'
import { RecoilRoot } from 'recoil'
// import './index.css'
import App from './App'
// style
// import 'tailwindcss/tailwind.css'
import './index.css'
import ReactGA from 'react-ga4';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const gaTrackingID = process.env.REACT_APP_GA_TRACKING_ID!
ReactGA.initialize(gaTrackingID);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
