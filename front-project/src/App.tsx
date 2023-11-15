import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


import { Button } from 'flowbite-react';
import Console from './Console';
import './App.css'

function App() {
  return (
    <section className='h-screen bg-gray-950 flex justify-center justify-items-center py-12'>
      <Console></Console>
    </section>
  )
}

export default App
