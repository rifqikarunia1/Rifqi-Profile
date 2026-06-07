import SideRays from "../components/reactbitsComponents/SideRays";

const experiences = [
    {
        company: "PT Khatulistiwa Nusantara Indonesia",
        role: "Fullstack Web Dev & Data Engineer",
        period: "2024 – Present",
        current: true,
        desc: "Handling reconciliation systems, operational support, SQL analysis, and backend development for enterprise applications.",
        tags: ["Django", "PostgreSQL", "React", "Trino", "Oracle DB"]
    },
    {
        company: "PT Khatulistiwa Nusantara Indonesia",
        role: "IT Support Helpdesk L2",
        period: "2024 – 2024",
        current: false,
        desc: "Provided technical support and troubleshooting for end-users, resolving hardware and software issues.",
        tags: ["IT Support", "Troubleshooting", "Helpdesk"]
    },
]

function Experience() {
    return (
        <section className="experience" id="experience" style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{
                position: 'absolute',
                inset: 0,
                zIndex: 0,
                pointerEvents: 'none',
            }}>
                <div style={{ width: '100%', height: '600px', position: 'relative' }}>
                    <SideRays
                        speed={4.5}
                        rayColor1="#f9f9f9"
                        rayColor2="#96c8ff"
                        intensity={2.6}
                        spread={2}
                        origin="top-right"
                        tilt={0}
                        saturation={1.5}
                        blend={0.68}
                        falloff={1.6}
                        opacity={1}
                    />
                </div>
            </div>



            <p className="section-label">Career Path</p>
            <h2 className="section-title" style={{ marginBottom: '64px' }}>Experience</h2>

            <div className="exp-timeline">
                {experiences.map((exp, i) => (
                    <div className="exp-card" key={i}>
                        <div className="exp-timeline-col">
                            <div className={`exp-dot ${exp.current ? 'exp-dot-active' : ''}`} />
                            {i < experiences.length - 1 && <div className="exp-line" />}
                        </div>

                        <div className="exp-body">
                            <div className="exp-header">
                                <div>
                                    <h3 className="exp-company">{exp.company}</h3>
                                    <p className="exp-role">{exp.role}</p>
                                </div>
                                <span className={`exp-badge ${exp.current ? 'exp-badge-active' : ''}`}>
                                    {exp.current ? '🟢 Present' : exp.period}
                                </span>
                            </div>

                            <p className="exp-desc">{exp.desc}</p>

                            <div className="exp-tags">
                                {exp.tags.map((tag, j) => (
                                    <span key={j} className="exp-tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Experience