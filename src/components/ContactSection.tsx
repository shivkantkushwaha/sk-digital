import StartProjectButton from '@/components/StartProjectButton'

export default function ContactSection() {
  return (
    <section className="py-20 md:py-32 bg-foreground text-background px-6 md:px-12 text-center">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-8">Have a website in mind?</h2>
        <p className="text-xl md:text-2xl text-muted-foreground/80 mb-12">
          Tell us a little about your business and what you need. We’ll take it from there.
        </p>
        
        <div className="flex justify-center mb-8">
          <StartProjectButton className="inline-block bg-background text-foreground px-10 py-5 rounded-full text-lg font-medium hover:scale-105 transition-transform duration-300 shadow-xl" />
        </div>
        
        <div>
          <a href="mailto:agencyshivkant@gmail.com" className="text-lg text-background hover:opacity-70 transition-opacity block mb-1">agencyshivkant@gmail.com</a>
          <a href="tel:+919219772561" className="text-lg text-background hover:opacity-70 transition-opacity block mb-2">+91 9219772561</a>
          <p className="text-muted-foreground/80 mt-4 text-sm">Usually best to start with an email.</p>
        </div>
      </div>
    </section>
  )
}
