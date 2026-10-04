import Image from 'next/image'
import Link from 'next/link'
import StartProjectButton from '@/components/StartProjectButton'
import ContactSection from '@/components/ContactSection'
import ViewWorkButton from '@/components/ViewWorkButton'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* HERO SECTION */}
      <section id="home" className="relative pt-24 pb-16 md:pt-36 md:pb-24 px-6 md:px-12 container mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
        
        {/* Text Content */}
        <div className="w-full lg:w-[55%] flex flex-col items-start animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-both z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted border border-border mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-foreground animate-pulse"></span>
            <span className="text-xs font-bold tracking-widest uppercase text-foreground">Web Design Agency</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-[3.8rem] font-semibold tracking-tight text-balance leading-[1.05] mb-5">
            Websites that make your business look as professional as it really is.
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
            SKDigital designs, builds, and manages modern websites for businesses that want to look credible online, attract better customers, and stay easy to find.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <StartProjectButton className="bg-foreground text-background px-7 py-3.5 rounded-full font-medium hover:bg-foreground/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-center" />
            <ViewWorkButton className="px-7 py-3.5 rounded-full font-medium border border-border hover:bg-muted transition-all text-center cursor-pointer" />
          </div>
          
          <p className="mt-8 text-xs text-muted-foreground font-medium flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="text-foreground">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            Design • Development • Ongoing Website Management
          </p>
        </div>
        
        {/* Hero Image */}
        <div className="w-full lg:w-[45%] relative animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
          {/* Decorative blur blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-foreground/5 blur-3xl rounded-full z-0 pointer-events-none"></div>
          
          <div className="relative w-full aspect-[4/3] rounded-2xl border border-border/50 bg-muted/30 overflow-hidden shadow-2xl group z-10">
            <Image 
              src="/hero_abstract_ui_1791123931144.jpg" 
              alt="SKDigital Web Interface Concept" 
              fill 
              className="object-cover relative z-10 transition-transform duration-1000 group-hover:scale-105"
              priority
            />
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-20 md:py-28 bg-muted px-6 md:px-12 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">What SKDigital does</h2>
            <p className="text-xl text-muted-foreground max-w-2xl">Focused web services without the unnecessary agency fluff.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Service Cards */}
            <div className="bg-background p-8 md:p-12 rounded-2xl shadow-sm border border-border/50 hover:-translate-y-1 transition-transform duration-300">
              <div className="text-sm font-bold text-muted-foreground mb-4">01</div>
              <h3 className="text-2xl font-semibold mb-4">Website Design & Development</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">Modern, responsive websites built around your business, your customers, and your goals.</p>
              <ul className="space-y-2 text-sm font-medium">
                <li className="flex gap-3"><span className="text-muted-foreground">—</span> Responsive design</li>
                <li className="flex gap-3"><span className="text-muted-foreground">—</span> Mobile-first experience</li>
                <li className="flex gap-3"><span className="text-muted-foreground">—</span> Fast performance</li>
                <li className="flex gap-3"><span className="text-muted-foreground">—</span> Professional presentation</li>
              </ul>
            </div>
            
            <div className="bg-background p-8 md:p-12 rounded-2xl shadow-sm border border-border/50 hover:-translate-y-1 transition-transform duration-300">
              <div className="text-sm font-bold text-muted-foreground mb-4">02</div>
              <h3 className="text-2xl font-semibold mb-4">Website Redesign</h3>
              <p className="text-muted-foreground leading-relaxed">
                Already have a website? We can modernize the design, improve the experience, and give your business a stronger online presence.
              </p>
            </div>

            <div className="bg-background p-8 md:p-12 rounded-2xl shadow-sm border border-border/50 hover:-translate-y-1 transition-transform duration-300">
              <div className="text-sm font-bold text-muted-foreground mb-4">03</div>
              <h3 className="text-2xl font-semibold mb-4">Website Management</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Keep your website updated, maintained, and running smoothly without having to deal with the technical side yourself.
              </p>
              <ul className="space-y-2 text-sm font-medium">
                <li className="flex gap-3"><span className="text-muted-foreground">—</span> Content updates</li>
                <li className="flex gap-3"><span className="text-muted-foreground">—</span> Maintenance & Support</li>
                <li className="flex gap-3"><span className="text-muted-foreground">—</span> Technical improvements</li>
              </ul>
            </div>

            <div className="bg-background p-8 md:p-12 rounded-2xl shadow-sm border border-border/50 hover:-translate-y-1 transition-transform duration-300">
              <div className="text-sm font-bold text-muted-foreground mb-4">04</div>
              <h3 className="text-2xl font-semibold mb-4">Landing Pages & Business Websites</h3>
              <p className="text-muted-foreground leading-relaxed">
                Focused pages designed to present a business, service, campaign, or offer clearly and professionally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY A GOOD WEBSITE MATTERS */}
      <section className="py-20 md:py-28 px-6 md:px-12 container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="lg:sticky top-32">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-balance leading-[1.1] mb-6">
              Your website is often the first impression.
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Before someone calls, visits, or sends an enquiry, they will often look you up online. A good website gives them a reason to trust your business.
            </p>
          </div>
          <div className="flex flex-col gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-3">Look credible</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">A professional website immediately makes a business feel more established and trustworthy.</p>
            </div>
            <div className="h-px w-full bg-border/50"></div>
            <div>
              <h3 className="text-2xl font-semibold mb-3">Make information easy to find</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">Customers should quickly understand what you do, what you offer, and how to contact you.</p>
            </div>
            <div className="h-px w-full bg-border/50"></div>
            <div>
              <h3 className="text-2xl font-semibold mb-3">Turn visits into enquiries</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">Good design is not just about looking attractive. It should guide visitors toward taking action.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WORK / PORTFOLIO SECTION */}
      <section id="work" className="py-20 md:py-28 bg-foreground text-background px-6 md:px-12">
        <div className="container mx-auto">
          <div className="mb-12 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">Selected Work</h2>
              <p className="text-xl text-muted-foreground">A look at websites and concepts built with a focus on clarity, performance, and presentation.</p>
            </div>
            <p className="text-sm text-muted-foreground font-medium border border-muted-foreground/30 px-4 py-2 rounded-full inline-block">
              More projects are being added as SKDigital continues to grow.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 gap-y-16">
            {[
              { cat: "Service Business", title: "Salon Website Concept", desc: "A clean, elegant website concept designed to showcase services, pricing, and make booking easy for local clients.", img: "/salon_concept_1791123955078.jpg" },
              { cat: "Local Business", title: "Professional Contractor", desc: "A robust, trustworthy layout emphasizing past work, clear contact methods, and service areas.", img: "/contractor_concept_1791123988082.jpg" },
              { cat: "Campaign", title: "Focused Conversion Page", desc: "A high-converting single page layout designed to capture leads for a specific service offering.", img: "/landing_page_concept_1791124000661.jpg" },
              { cat: "Consulting", title: "Independent Consultant", desc: "An editorial-style personal website focusing on credibility, writing, and clear contact avenues.", img: "/consultant_concept_1791124012980.jpg" }
            ].map((work, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-[4/3] bg-muted/10 rounded-xl mb-6 overflow-hidden flex items-center justify-center border border-muted-foreground/20 group-hover:bg-muted/20 transition-colors duration-500">
                  <Image 
                    src={work.img}
                    alt={work.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-3">{work.cat}</p>
                <h3 className="text-2xl font-semibold mb-3">{work.title}</h3>
                <p className="text-muted-foreground mb-6 line-clamp-2">{work.desc}</p>
                <button className="text-sm font-medium border-b border-background/30 group-hover:border-background pb-1 transition-colors">View Project</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section id="process" className="py-20 md:py-28 px-6 md:px-12 container mx-auto">
        <div className="mb-12 md:mb-20 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">A simple process.</h2>
          <p className="text-xl text-muted-foreground">From the first conversation to a website you can confidently send customers to.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8 md:gap-4 relative">
          {/* Desktop timeline line */}
          <div className="hidden md:block absolute top-[28px] left-0 w-full h-px bg-border"></div>
          
          <div className="relative pt-4 md:pt-12">
            <div className="hidden md:block absolute top-0 left-6 w-3 h-3 rounded-full bg-foreground -translate-y-1/2"></div>
            <div className="text-sm font-bold text-muted-foreground mb-3">01 — Understand</div>
            <h3 className="text-xl font-semibold mb-3">Discovery</h3>
            <p className="text-muted-foreground">We learn about your business, your customers, and what the website needs to achieve.</p>
          </div>
          <div className="relative pt-4 md:pt-12 border-t md:border-t-0 border-border md:border-transparent">
            <div className="hidden md:block absolute top-0 left-6 w-3 h-3 rounded-full bg-border -translate-y-1/2"></div>
            <div className="text-sm font-bold text-muted-foreground mb-3 mt-4 md:mt-0">02 — Design</div>
            <h3 className="text-xl font-semibold mb-3">Visual Direction</h3>
            <p className="text-muted-foreground">We create a clear visual direction and structure around your business.</p>
          </div>
          <div className="relative pt-4 md:pt-12 border-t md:border-t-0 border-border md:border-transparent">
            <div className="hidden md:block absolute top-0 left-6 w-3 h-3 rounded-full bg-border -translate-y-1/2"></div>
            <div className="text-sm font-bold text-muted-foreground mb-3 mt-4 md:mt-0">03 — Build</div>
            <h3 className="text-xl font-semibold mb-3">Development</h3>
            <p className="text-muted-foreground">The website is developed with responsive design, performance, and usability in mind.</p>
          </div>
          <div className="relative pt-4 md:pt-12 border-t md:border-t-0 border-border md:border-transparent">
            <div className="hidden md:block absolute top-0 left-6 w-3 h-3 rounded-full bg-border -translate-y-1/2"></div>
            <div className="text-sm font-bold text-muted-foreground mb-3 mt-4 md:mt-0">04 — Launch & Manage</div>
            <h3 className="text-xl font-semibold mb-3">Ongoing Support</h3>
            <p className="text-muted-foreground">After launch, SKDigital can continue helping with updates, maintenance, and improvements.</p>
          </div>
        </div>
      </section>

      {/* WHY SKDIGITAL & ABOUT */}
      <section id="about" className="py-24 md:py-32 bg-foreground text-background px-6 md:px-12">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-center mb-32">
            
            {/* Text Side */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-background/20 mb-8">
                <span className="w-2 h-2 rounded-full bg-background"></span>
                <span className="text-xs font-bold tracking-widest uppercase">About SKDigital</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-semibold tracking-tight leading-[1.1] mb-8">
                We build modern websites without the unnecessary complexity.
              </h2>
              
              <div className="space-y-6 text-lg md:text-xl text-muted-foreground/80 leading-relaxed max-w-2xl">
                <p>
                  SKDigital is an independent web-focused digital agency. Our goal is simple: to help businesses present themselves powerfully and professionally online.
                </p>
                <p>
                  We strip away the agency fluff, bloated processes, and buzzwords to focus purely on what works: clean design, fast performance, and clear messaging.
                </p>
              </div>
            </div>

            {/* Image Side */}
            <div className="order-1 lg:order-2 relative w-full">
              <div className="relative aspect-[4/5] md:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-background/10">
                 <Image 
                  src="/about_abstract_1791124023625.jpg"
                  alt="About SKDigital Concept"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-1000 ease-out"
                />
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 pt-24">
            <div className="mb-16">
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">Small by design. Focused by choice.</h2>
              <p className="text-xl text-muted-foreground/80 max-w-3xl leading-relaxed">
                SKDigital is built around a simple idea: businesses do not always need a huge agency. They need someone who understands the business, builds the website properly, and stays available when it needs to change.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-background">Focused</h3>
                <p className="text-muted-foreground/80">We concentrate on websites instead of trying to sell every digital service under the sun.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-background">Practical</h3>
                <p className="text-muted-foreground/80">Every design decision should serve a purpose.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-background">Personal</h3>
                <p className="text-muted-foreground/80">You work directly with the person building your website.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-background">Long-term</h3>
                <p className="text-muted-foreground/80">The relationship does not have to end when the website goes live.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 px-6 md:px-12 container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-16 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            { q: "What kind of businesses do you work with?", a: "SKDigital can build websites for local businesses, service businesses, professionals, startups, and growing brands." },
            { q: "How long does a website take?", a: "Project timelines depend on the size and requirements of the website. After understanding the project, SKDigital can provide a realistic timeline." },
            { q: "Can you redesign an existing website?", a: "Yes. Existing websites can be redesigned to improve their appearance, usability, responsiveness, and overall presentation." },
            { q: "Can you manage the website after launch?", a: "Yes. SKDigital can help with ongoing updates, maintenance, and website improvements." },
          ].map((faq, i) => (
            <details key={i} className="group border-b border-border pb-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-xl font-semibold">
                {faq.q}
                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 text-muted-foreground leading-relaxed text-lg">{faq.a}</p>
            </details>
          ))}
          <details className="group border-b border-border pb-6 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-xl font-semibold">
              How do I get started?
              <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <p className="mt-4 text-muted-foreground leading-relaxed text-lg">
              Send an email to <a href="mailto:agencyshivkant@gmail.com" className="text-foreground underline underline-offset-4">agencyshivkant@gmail.com</a> with a little information about your business and what you need. SKDigital will get back to you.
            </p>
          </details>
        </div>
      </section>

      {/* Shared Contact Section */}
      <ContactSection />
    </div>
  )
}
