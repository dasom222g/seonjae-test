// import { Client } from '@notionhq/client'
import React, { FC, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import { getNotionItem } from './lib/utils'
import Home from './pages/Home'
import Result from './pages/Result'
import Test from './pages/Test'

const App: FC = () => {
  const notionVersion = '2022-06-28'
  const notionKey = process.env.REACT_APP_NOTION_KEY || ''
  const notionDatabaseKey = process.env.REACT_APP_NOTION_DATABASE_KEY || ''

  const corsTest = async (): Promise<void> => {
    const response = await fetch('/users')
    const data = await response.json()
    console.log('data', data)
  }

  useEffect(() => {
    // const getData = async (): Promise<void> => {
    //   const questionData = await getNotionItem(notionKey, notionDatabaseKey, notionVersion)
    //   console.log('questionData', questionData)
    // }

    // getData()

    const questionData = getNotionItem(notionKey, notionDatabaseKey, notionVersion)
    console.log('🚀 : questionData:', questionData)

    corsTest()
  })

  return (
    <BrowserRouter>
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
