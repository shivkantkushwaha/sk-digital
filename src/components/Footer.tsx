"use client"
import Link from 'next/link'

export default function Footer() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-foreground text-background pt-24 pb-8 border-t border-background/10 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-32">
          
          {/* Left Brand Area */}
          <div className="max-w-sm">
            <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-4xl font-cursive font-bold mb-6 text-background block hover:opacity-80 transition-opacity cursor-pointer">
              SKDIGITAL
            </Link>
            <p className="text-2xl font-medium tracking-tight text-balance leading-snug text-background/90">
              Websites that make your business look as professional as it really is.
            </p>
          </div>
          
          {/* Right Links Area */}
          <div className="flex flex-col sm:flex-row gap-12 sm:gap-24 lg:pt-4">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-background/50 mb-6">Navigation</p>
              <nav className="flex flex-col gap-4">
                <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-background/80 hover:text-background transition-colors font-medium cursor-pointer">Home</Link>
                <a href="#services" onClick={(e) => handleScrollTo(e, 'services')} className="text-background/80 hover:text-background transition-colors font-medium cursor-pointer">Services</a>
                <a href="#work" onClick={(e) => handleScrollTo(e, 'work')} className="text-background/80 hover:text-background transition-colors font-medium cursor-pointer">Work</a>
                <a href="#process" onClick={(e) => handleScrollTo(e, 'process')} className="text-background/80 hover:text-background transition-colors font-medium cursor-pointer">Process</a>
                <a href="#about" onClick={(e) => handleScrollTo(e, 'about')} className="text-background/80 hover:text-background transition-colors font-medium cursor-pointer">About</a>
              </nav>
            </div>
            
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-background/50 mb-6">Contact</p>
              <div className="flex flex-col gap-4">
                <a href="mailto:agencyshivkant@gmail.com" className="text-background/80 hover:text-background transition-colors font-medium cursor-pointer">agencyshivkant@gmail.com</a>
                <a href="tel:+919219772561" className="text-background/80 hover:text-background transition-colors font-medium cursor-pointer">+91 9219772561</a>
                <a href="https://shivkantkushwaha.online" className="text-background/80 hover:text-background transition-colors font-medium mt-4 border-b border-background/20 self-start pb-0.5 cursor-pointer">shivkantkushwaha.online</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50 font-medium">
            © {new Date().getFullYear()} SKDigital. All rights reserved.
          </p>
          <div className="text-sm text-background/50 font-medium flex gap-6">
            <span>Designed & Built by SKDigital</span>
          </div>
        </div>
        
      </div>
      
      {/* Massive Background Logo effect */}
      <div className="absolute bottom-[-15%] left-1/2 -translate-x-1/2 w-full flex justify-center opacity-[0.03] pointer-events-none select-none z-0">
        <span className="text-[8rem] sm:text-[15rem] md:text-[25rem] font-cursive font-bold whitespace-nowrap leading-none tracking-tighter">
          SKDIGITAL
        </span>
      </div>
    </footer>
  )
}
