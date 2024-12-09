'use client'

import { useState, useEffect } from 'react'

interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

export default function MessageList() {
  const [messages, setMessages] = useState<Message[]>([])

  const fetchMessages = async () => {
    const response = await fetch('/api/get-messages')
    if (response.ok) {
      const data = await response.json()
      setMessages(data.messages)
    } else {
      console.error('Error al obtener los mensajes')
    }
  }

  useEffect(() => {
    fetchMessages()
  }, [])

  return (
    <div className="mt-8 md:mt-0">
      <h2 className="text-xl font-bold mb-4">Mensajes Recibidos</h2>
      {messages.length === 0 ? (
        <p>No hay mensajes aún.</p>
      ) : (
        <ul className="space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto pr-4">
          {messages.map((message) => (
            <li key={message.id} className="border p-4 rounded-md shadow-sm">
              <p><strong>Nombre:</strong> {message.name}</p>
              <p><strong>Email:</strong> {message.email}</p>
              <p><strong>Mensaje:</strong> {message.message}</p>
              <p className="text-sm text-gray-500"><strong>Fecha:</strong> {new Date(message.createdAt).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

