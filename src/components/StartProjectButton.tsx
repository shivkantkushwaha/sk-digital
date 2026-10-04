"use client"
import { useState, useEffect } from 'react'

export default function StartProjectButton({ className, children = "Start a Project" }: { className?: string, children?: React.ReactNode }) {
  const [contactModalOpen, setContactModalOpen] = useState(false)

  // Close modal on escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setContactModalOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <>
      <button 
        onClick={() => setContactModalOpen(true)} 
        className={`cursor-pointer ${className}`}
      >
        {children}
      </button>

      {contactModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 text-left">
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" 
            onClick={() => setContactModalOpen(false)}
          ></div>
          <div className="relative bg-background border border-border p-8 md:p-12 rounded-2xl shadow-2xl max-w-lg w-full animate-in zoom-in-95 duration-200">
            <button 
              onClick={() => setContactModalOpen(false)}
              className="absolute top-6 right-6 text-muted-foreground hover:text-foreground"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-3xl font-semibold mb-2 text-foreground">Let's build something.</h2>
            <p className="text-muted-foreground mb-8 text-lg">We’d love to hear about your project. Reach out to us directly.</p>
            
            <div className="space-y-6">
              <a href="mailto:agencyshivkant@gmail.com" className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-foreground/30 hover:bg-muted/50 transition-colors group">
                <div className="bg-muted p-3 rounded-full group-hover:bg-background transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2 text-foreground">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Email Us</p>
                  <p className="text-lg font-semibold text-foreground">agencyshivkant@gmail.com</p>
                </div>
              </a>
              
              <a href="tel:+919219772561" className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-foreground/30 hover:bg-muted/50 transition-colors group">
                <div className="bg-muted p-3 rounded-full group-hover:bg-background transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2 text-foreground">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Call Us</p>
                  <p className="text-lg font-semibold text-foreground">+91 9219772561</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
