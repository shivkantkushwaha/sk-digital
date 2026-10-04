"use client"

export default function ViewWorkButton({ className }: { className?: string }) {
  const handleScrollTo = (e: React.MouseEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <button 
      onClick={(e) => handleScrollTo(e, 'work')} 
      className={className}
    >
      View Our Work
    </button>
  )
}
