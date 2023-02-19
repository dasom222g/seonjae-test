// import { Client } from '@notionhq/client'
import React, { FC, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import { BASEURL } from './lib/utils'
import Home from './pages/Home'
import Result from './pages/Result'
import Test from './pages/Test'

const App: FC = () => {
  const notionVersion = '2022-06-28'
  const notionKey = process.env.REACT_APP_NOTION_KEY
  const notionDatabaseKey = process.env.REACT_APP_NOTION_DATABASE_KEY || ''

  const getItem = async (): Promise<void> => {
    try {
      const response = await fetch(`${BASEURL}/${notionDatabaseKey}/query`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${notionKey}`,
          'Notion-Version': notionVersion,
        },
        body: JSON.stringify({
          sort: {
            direction: 'ascending',
            timestamp: 'last_edited_time',
          },
        }),
      })
      const data = await response.json()
      console.log('data', data.results)
      // data.results.forEach((item: any) => {
      //   console.log('item', item.properties.id)
      // })
      // const questionText = data.results[0].properties.questionText
      // console.log('🚀 : questionText', questionText)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    getItem()
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
