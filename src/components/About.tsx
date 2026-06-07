import { useEffect, useState } from "react"
import SplitText from "../components/reactbitsComponents/SplitText";
import ShinyText from "../components/reactbitsComponents/ShinyText";
import Particles from "../components/reactbitsComponents/Particles";


const words = [
    "For me, engineering is a continuous journey of learning by doing.",
    "I thrive on solving problems, experimenting with new ideas, and constantly improving with every project.",
]

function About() {
    const [roleIndex, setRoleIndex] = useState(0)
    const [displayed, setDisplayed] = useState("")
    const [deleting, setDeleting] = useState(false)

    useEffect(() => {
        const current = words[roleIndex]
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
            setRoleIndex((prev) => (prev + 1) % words.length)
        }

        return () => clearTimeout(timeout)
    }, [displayed, deleting, roleIndex])

    return (

        <section className="about" id="about" style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{
                position: 'absolute',
                inset: 0,
                zIndex: 0,
                pointerEvents: 'none',
            }}>
                <div style={{ width: '100%', height: '600px', position: 'relative' }}>
                    <Particles
                        particleColors={["#a944e0"]}
                        particleCount={1000}
                        particleSpread={10}
                        speed={0.7}
                        particleBaseSize={100}
                        moveParticlesOnHover
                        alphaParticles={false}
                        disableRotation
                        pixelRatio={1}
                    />
                </div>
            </div>

            <div className="about-inner" style={{ position: 'relative', zIndex: 1 }}>
                <div>
                    <p className="about-label">About Me</p>
                    <h2 className="about-headline">
                        <SplitText
                            text="I thrive on solving problems, experimenting with new ideas, and constantly improving with every project."
                            tag="h2"
                            className="about-headline"
                            delay={40}
                            duration={0.6}
                            ease="power3.out"
                            splitType="words"
                        />
                    </h2>
                </div>

                <div>
                    <div className="about-body" style={{ marginBottom: '2rem' }}>
                        <p style={{ textAlign: 'justify' }}>
                            <ShinyText
                                text="Full stack Web Developer and IT Support with 2+ years of experience in web-based systems and operational support.
                                        Experienced in developing backend & frontend systems, managing databases, and handling data validation and troubleshooting.
                                        Skilled in working with MySQL, Oracle, Trino(Ice Berg) and PostgreSQL, including processing large-scale transaction data.
                                        Able to support business operations through reliable and efficient system solutions."
                                speed={2}
                                delay={0}
                                color="#b5b5b5"
                                shineColor="#ffffff"
                                spread={120}
                                direction="left"
                                yoyo={false}
                                pauseOnHover={false}
                                disabled={false}
                            />

                        </p>
                        <p style={{ textAlign: 'justify' }}>
                            <ShinyText
                                text="I believe the best way to grow is by learning through doing — solving
                                        problems, experimenting with new ideas, and constantly improving with
                                        every project. Currently expanding into modern frontend with React & TypeScript."
                                speed={2}
                                delay={0}
                                color="#b5b5b5"
                                shineColor="#ffffff"
                                spread={120}
                                direction="left"
                                yoyo={false}
                                pauseOnHover={false}
                                disabled={false}
                            />

                        </p>
                    </div>

                    <div className="about-stats" >
                        <div className="stat-item">
                            <div className="stat-num">3+</div>
                            <div className="stat-desc">Years of Experience</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-num">3</div>
                            <div className="stat-desc">Enterprise Projects</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-num">12+</div>
                            <div className="stat-desc">Tech Skills</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-num">∞</div>
                            <div className="stat-desc">Growth Mindset</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
