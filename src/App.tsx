import { useState } from 'react'
import './App.css'
import { BackgroundCircles, Button,Words } from './components'

import { useTheme } from './hooks/useTheme'

import { Routes, Route } from 'react-router-dom';

//Page Imports
import { OnboardingPage, Loading, GetStartedPage, MainLayout } from './pages';

function App() {
  const [resolvedTheme, toggleTheme] = useTheme('dark')

  return (
    <Routes>
      <Route path="/" element={<OnboardingPage/>} />
      <Route path='/loading' element={
        <div className='flex'>
          <Loading />
        </div>
      } />
      <Route path='main' element={<MainLayout/>} />
    </Routes>
  )
}

export default App
