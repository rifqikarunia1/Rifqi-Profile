import { useEffect, useState } from "react"
import profilePhoto from "../assets/myfoto.jpg"
import Aurora from "../components/reactbitsComponents/Aurora";


const roles = [
    "Web Developer",
    'Data Engineer',
    "IT Support L2",
]

function Hero() {
    const [roleIndex, setRoleIndex] = useState(0)
    const [displayed, setDisplayed] = useState("")
    const [deleting, setDeleting] = useState(false)

    useEffect(() => {
        const current = roles[roleIndex]
        let timeout: ReturnType<typeof setTimeout>

        if (!deleting && displayed.length < current.length) {
            timeout = setTimeout(() => {
                setDisplayed(current.slice(0, displayed.length + 1))
            }, 60)
        } else if (!deleting && displayed.length === current.length) {
            timeout = setTimeout(() => setDeleting(true), 2200)
        } else if (deleting && displayed.length > 0) {
            timeout = setTimeout(() => {
                setDisplayed(current.slice(0, displayed.length - 1))
            }, 35)
        } else if (deleting && displayed.length === 0) {
            setDeleting(false)
            setRoleIndex((prev) => (prev + 1) % roles.length)
        }

        return () => clearTimeout(timeout)
    }, [displayed, deleting, roleIndex])

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section className="hero" id="home">
            {/* <div className="hero-blob" />
            <div className="hero-blob-extra" /> */}

            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 0,
                pointerEvents: 'none',
            }}>
                <Aurora
                    colorStops={["#7e67ff", "#B497CF", "#5227FF"]}
                    blend={0.86}
                    amplitude={1.0}
                    speed={1.7}
                />
            </div>


            <div className="hero-avatar">
                <img src={profilePhoto} alt="Rifqi Karunia" />
            </div>

            <div className="hero-text">
                <h2 className="hero-greeting">Hallo</h2>


                <h1 className="hero-name">
                    I'm <span className="hero-name-accent">Rifqi Karunia</span>
                </h1>

                <h2 className="hero-role-line">
                    a <span className="hero-role-accent">
                        {displayed}<span className="cursor" />
                    </span>
                </h2>

                <p className="hero-desc" style={{ textAlign: 'justify' }}>
                    A tech professional with end-to-end expertise in the application lifecycle—from designing robust full-stack features and engineering scalable data pipelines to delivering high-level L2 technical support. Dedicated to continuous learning and leveraging diverse tech stacks to solve complex business problems.
                </p>

                <div className="hero-cta">
                    <button className="btn-dark" onClick={() => scrollTo('projects')}>
                        Explore My Works
                    </button>
                    <a href="src/assets/CV.pdf" target="_blank" rel="noreferrer" className="btn-outline">
                        Download CV
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero
