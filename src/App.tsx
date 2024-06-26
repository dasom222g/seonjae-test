import React, { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Result from './pages/Result'
import Test from './pages/Test'
import RouteChangeTracker from './lib/RouteChangeTracker'


const App: FC = () => {
  // logic
  // view
  return (
    <BrowserRouter>
      <RouteChangeTracker />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
