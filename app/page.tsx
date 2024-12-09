'use client'

import { useState } from 'react'
import ContactForm from './components/ContactForm'
import MessageList from './components/MessageList'

export default function Home() {
  const [key, setKey] = useState(0)

  const handleSubmitSuccess = () => {
    setKey(prevKey => prevKey + 1)
  }

  return (
    <main className="container mx-auto p-4 flex flex-col md:flex-row gap-8">
      <div className="md:w-1/2">
        <h1 className="text-2xl font-bold mb-4">Formulario de Contacto</h1>
        <ContactForm onSubmitSuccess={handleSubmitSuccess} />
      </div>
      <div className="md:w-1/2">
        <MessageList key={key} />
      </div>
    </main>
  )
}

