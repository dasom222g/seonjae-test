import React, { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Question from './pages/Question'
import Result from './pages/Result'

const App: FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/question" element={<Question />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
