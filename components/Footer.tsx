'use client'

import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'

const footerLinks = {
  'Quick Links': [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Membership', href: '/membership' },
    { name: 'Gallery', href: '/gallery' },
  ],
  'Resources': [
    { name: 'Downloads', href: '/downloads' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact Us', href: '/contact' },
  ],
}

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Email', icon: Mail, href: 'mailto:info@betra.org' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-8">
          {/* About Section */}
          <div>
            <h3 className="mb-4 flex items-center space-x-2 font-bold text-foreground">
              <Image
              src="/logo.jpeg"
              alt="BETRA Logo"
              width={28}
              height={28}
              className="object-contain"
              />
              <span>BETRA</span>
            </h3>
            <p className="text-sm text-muted-foreground">
              Building Excellence Through Research & Analysis. Dedicated to supporting evidence-based decision-making through rigorous research.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-4 font-semibold text-foreground">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-border pt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {currentYear} BETRA. All rights reserved.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label={link.name}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
