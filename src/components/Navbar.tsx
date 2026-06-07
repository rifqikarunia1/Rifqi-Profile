import { useEffect, useState } from "react"

const navItems = [
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Skills", id: "skills" },
]

function Navbar() {
    const [active, setActive] = useState("")
    const [scrolled, setScrolled] = useState(false)

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40)

            const sections = navItems.map(item => document.getElementById(item.id))
            sections.forEach((section) => {
                if (!section) return
                const rect = section.getBoundingClientRect()
                if (rect.top <= 120 && rect.bottom >= 120) {
                    setActive(section.id)
                }
            })
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
            <h2 className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                RK<span className="logo-dot">.</span>
            </h2>

            <div className="nav-pill">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        className={`nav-pill-item ${active === item.id ? 'nav-pill-active' : ''}`}
                        onClick={() => scrollTo(item.id)}
                    >
                        {item.label}
                    </button>
                ))}
            </div>

            <button className="nav-cta" onClick={() => scrollTo('contact')}>
                Contact →
            </button>
        </nav>
    )
}

export default Navbar