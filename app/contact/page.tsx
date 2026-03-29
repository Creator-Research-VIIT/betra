import { Metadata } from 'next'
// import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { ContactForm } from '@/components/ContactForm'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MapPin, Mail, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us | BETRA',
  description: 'Get in touch with BETRA - Banking Education Training & Research Academy.',
}

export default function Contact() {
  return (
    <>
      {/* <Header /> */}

      <main>

        {/* 🔥 HERO */}
        <Hero
            title="Contact BETRA"
            description="We are here to support banking education, training, and financial literacy initiatives."
            className="bg-[#0a1a3a] text-white"
            align="left"
        />

        {/* 🔥 CONTACT SECTION */}
        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 lg:grid-cols-3">

            {/* 🔥 CONTACT INFO */}
            <div className="space-y-8">

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Banking Education Training & Research Academy (BETRA)
                </h2>
                <p className="text-muted-foreground">
                  Dedicated to advancing financial literacy, banking education, and institutional excellence.
                </p>
              </div>

              <Card className="rounded-xl shadow-sm">
                <CardContent className="p-6 space-y-6">

                  {/* Address */}
                  <div className="flex gap-4">
                    <MapPin className="text-primary" />
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-sm text-muted-foreground">
                        Plot No. 1, Satyamnagar, N-5 CIDCO <br />
                        Chhatrapati Sambhajinagar – 431003,<br />
                        Maharashtra
                      </p>
                    </div>
                  </div>

                  {/* Email (placeholder if not provided) */}
                  <div className="flex gap-4">
                    <Mail className="text-primary" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-sm text-muted-foreground">
                        contact@betra.in
                      </p>
                    </div>
                  </div>

                  {/* Timing */}
                  <div className="flex gap-4">
                    <Clock className="text-primary" />
                    <div>
                      <p className="font-semibold">Working Hours</p>
                      <p className="text-sm text-muted-foreground">
                        Monday – Saturday: 10:00 AM – 6:00 PM <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>

                </CardContent>
              </Card>

              {/* Quick Info */}
              <Card className="rounded-xl bg-muted/40">
                <CardContent className="p-6 text-sm text-muted-foreground">
                  We aim to respond to all inquiries within 24–48 hours. For institutional collaborations, please mention details in your message.
                </CardContent>
              </Card>

            </div>

            {/* 🔥 CONTACT FORM */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

          </div>
        </section>

        {/* 🔥 MAP SECTION */}
        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="rounded-2xl border bg-muted p-8">
            <h2 className="text-2xl font-bold mb-4">
              Visit Our Location
            </h2>

            <p className="text-muted-foreground mb-6">
              BETRA is located in Chhatrapati Sambhajinagar, Maharashtra. Visitors are welcome during working hours.
            </p>

            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
              src="https://www.google.com/maps?q=Plot+No.+1,+Satyamnagar,+N-5+CIDCO,+Chhatrapati+Sambhajinagar,+Maharashtra+431003&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* 🔥 CTA */}
        <section className="px-6 pb-24">
          <div className="mx-auto max-w-7xl bg-[#0a1a3a] text-white rounded-2xl p-10 text-center">

            <h2 className="text-2xl font-bold mb-4">
              Let’s Build a Stronger Banking Ecosystem Together
            </h2>

            <p className="text-gray-300 mb-6">
              Connect with BETRA for training, financial literacy programs, and institutional collaborations.
            </p>

            <a
              href="/contact"
              className="inline-block bg-white text-black px-6 py-3 rounded-md hover:bg-gray-200 transition"
            >
              Get in Touch
            </a>

          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}