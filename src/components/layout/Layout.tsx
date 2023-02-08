import React, { FC } from 'react'
import Header from './Header'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const bgStyle = {
    backgroundImage: 'url(/images/grid_bg.svg)',
  }
  return (
    <div
      className="bg-mbti-light-mint bg-repeat min-h-screen h-full p-4 overflow-auto"
      style={bgStyle}>
      <div className="h-full flex flex-col">
        <Header />
        <main className="px-4 h-full"> {children}</main>
      </div>
    </div>
  )
}

export default Layout
