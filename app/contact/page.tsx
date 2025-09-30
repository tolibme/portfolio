import { Contact2 } from '@/components/contact2'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Portfolio',
  description: 'Get in touch with me for collaborations, projects, or opportunities.',
}

export default function ContactPage() {
  return (
          <Contact2 />
  )
}