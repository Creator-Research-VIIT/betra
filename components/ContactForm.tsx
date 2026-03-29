'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault()

  const form = e.currentTarget

  console.log("FORM SUBMITTED") // ✅ HERE

  setIsSubmitting(true)
  setError('')

  const formData = new FormData(e.currentTarget)

  const data = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    subject: formData.get('subject') as string,
    message: formData.get('message') as string,
  }

  console.log("DATA:", data) // ✅ HERE

  try {
    console.log("CALLING API...") // ✅ BEFORE FETCH

    const res = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    console.log("RESPONSE STATUS:", res.status) // ✅ AFTER FETCH

    const result = await res.json()

    console.log("RESPONSE DATA:", result) // ✅ AFTER JSON

    if (!res.ok) {
      throw new Error(result.error || 'Something went wrong')
    }

    setIsSubmitted(true)
    form.reset()
    setTimeout(() => setIsSubmitted(false), 3000)

  } catch (err: any) {
    console.error("FRONTEND ERROR:", err) // ✅ ERROR LOG
    setError(err.message || 'Network error')
  } finally {
    setIsSubmitting(false)
  }
}

  return (
    <Card>
      <CardHeader>
        <CardTitle>Get in Touch</CardTitle>
        <CardDescription>
          Send us a message and we'll respond as soon as possible.
        </CardDescription>
      </CardHeader>

      <CardContent>
        {isSubmitted ? (
          <div className="rounded-lg bg-green-100 p-4 text-green-800 text-center">
            ✅ Message sent successfully!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">

            <div>
              <label className="mb-2 block text-sm font-medium">Full Name</label>
              <Input name="name" required placeholder="Your name" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Email</label>
              <Input type="email" name="email" required placeholder="your@email.com" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Subject</label>
              <Input name="subject" required placeholder="Subject" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Message</label>
              <Textarea name="message" required rows={5} placeholder="Your message..." />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#0a1a3a] text-white"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>

            {error && (
              <div className="text-red-600 text-sm text-center">
                {error}
              </div>
            )}

          </form>
        )}
      </CardContent>
    </Card>
  )
}