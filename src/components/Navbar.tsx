"use client"
import Link from 'next/link'
import { useState, useEffect } from 'react'
import StartProjectButton from './StartProjectButton'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', id: 'services' },
    { name: 'Work', id: 'work' },
    { name: 'Process', id: 'process' },
    { name: 'About', id: 'about' },
  ]

  return (
    <>
      <header className={`fixed top-0 w-full z-40 transition-all duration-300 border-b ${isScrolled ? 'bg-white/90 backdrop-blur-md border-border py-4' : 'bg-transparent border-transparent py-6'}`}>
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-3 items-center">
          
          {/* Left: Logo */}
          <div className="flex justify-start">
            <Link href="/" className="text-2xl font-cursive font-bold tracking-tight cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              SKDIGITAL
            </Link>
          </div>

          {/* Middle: Desktop Nav */}
          <nav className="hidden md:flex items-center justify-center gap-8">
            {navLinks.map((link) => (
              link.href === '/' ? (
                <Link key={link.name} href="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                  {link.name}
                </Link>
              ) : (
                <a 
                  key={link.name} 
                  href={`#${link.id}`} 
                  onClick={(e) => handleScrollTo(e, link.id!)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                >
                  {link.name}
                </a>
              )
            ))}
          </nav>

          {/* Right: CTA Button */}
          <div className="hidden md:flex justify-end">
            <StartProjectButton className="bg-foreground text-background px-6 py-2.5 rounded-full text-sm font-medium hover:bg-foreground/90 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5" />
          </div>

          {/* Mobile Toggle */}
          <div className="flex md:hidden justify-end z-50">
            <button 
              className="p-2 cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <div className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : 'mb-1.5'}`}></div>
              <div className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-0.5' : ''}`}></div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 z-30 bg-background flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out md:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {navLinks.map((link) => (
          link.href === '/' ? (
            <Link 
              key={link.name} 
              href="/" 
              onClick={() => { setMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-2xl font-medium cursor-pointer"
            >
              {link.name}
            </Link>
          ) : (
            <a 
              key={link.name} 
              href={`#${link.id}`} 
              onClick={(e) => handleScrollTo(e, link.id!)}
              className="text-2xl font-medium cursor-pointer"
            >
              {link.name}
            </a>
          )
        ))}
        <div onClick={() => setMobileMenuOpen(false)}>
          <StartProjectButton className="bg-foreground text-background px-8 py-4 rounded-full text-lg font-medium mt-4 cursor-pointer" />
        </div>
      </div>
    </>
  )
}
