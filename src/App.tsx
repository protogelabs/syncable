import { useState } from 'react'
import './App.css'
import { BackgroundCircles, Button,Words } from './components'

import { useTheme } from './hooks/useTheme'

import { Routes, Route } from 'react-router-dom';

//Page Imports
import { OnboardingPage } from './pages';

function App() {
  const [resolvedTheme, toggleTheme] = useTheme('dark')

  return (
    <Routes>
      <Route path="/" element={<OnboardingPage/>} />
    </Routes>
  )
}

export default App
