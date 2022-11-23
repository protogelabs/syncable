import { useState } from 'react'
import './App.css'
//hooks import
import { useTheme } from './hooks/useTheme'
//routes
import { Routes, Route } from 'react-router-dom';
//Page Imports
import { OnboardingPage, Loading, GetStartedPage, MainLayout, HomePage } from './pages';

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

      <Route path='/main' element={<MainLayout/>}>
        <Route index path='home' element={<HomePage/>} />
      </Route>
    </Routes>
  )
}

export default App
