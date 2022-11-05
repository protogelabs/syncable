import { useState } from 'react'
import './App.css'
import { BackgroundCircles, Button,Words } from './components'
import {GetStartedPage,Loading} from './pages'

import { useTheme } from './hooks/useTheme'

function App() {
  const [resolvedTheme, toggleTheme] = useTheme('dark')

  return (
    <div className='flex'>
     <Loading />
    </div>
  )
}

export default App
