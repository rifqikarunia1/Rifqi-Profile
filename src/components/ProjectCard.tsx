import Stack from "../components/reactbitsComponents/Stack";
import { useState } from "react"


type ProjectCardProps = {
    index: number
    title: string
    description: string
    tech: string[]
    link?: string
    period: string
    photos: string[]
}

function ProjectCard({ index, title, description, tech, link, period, photos }: ProjectCardProps) {
    const [lightbox, setLightbox] = useState(false)
    const [activePhoto, setActivePhoto] = useState(0)
    return (
        <div className="project-card-v2">
            {/* kiri: info */}
            <div className="project-card-left">
                <h3 className="project-card-title">{title}</h3>
                <p className="project-card-desc">{description}</p>

                <div className="project-tech-grid">
                    {tech.map((t, i) => (
                        <span key={i} className="tech-badge">{t}</span>
                    ))}
                </div>

                <div className="project-card-footer">
                    {link ? (
                        <a href={link} target="_blank" rel="noreferrer" className="project-link-btn">
                            ▶ Visit Project →
                        </a>
                    ) : null}
                    <span className="project-period">Released on <strong>{period}</strong></span>
                </div>
            </div>

            {/* kanan: foto stack */}
            <div
                className="project-card-right"

            >
                <div style={{ width: 240, height: 280 }}>
                    <Stack
                        randomRotation={true}
                        sensitivity={200}
                        sendToBackOnClick={true}
                        cards={photos.map((src: string, i: number) => (
                            <img
                                key={i}
                                src={src}
                                alt={`card-${i + 1}`}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        ))}
                        autoplay={false}
                        autoplayDelay={3000}
                        pauseOnHover={true}
                    />
                </div>

                <button
                    onClick={() => setLightbox(true)}
                    className="preview-btn"
                >
                    🔍 Preview
                </button>

            </div>

            {lightbox && (
                <div className="lightbox-overlay" onClick={() => setLightbox(false)}>
                    <div className="lightbox-content" onClick={e => e.stopPropagation()}>
                        <button className="lightbox-close" onClick={() => setLightbox(false)}>✕</button>

                        <img src={photos[activePhoto]} alt="preview" className="lightbox-img" />

                        {photos.length > 1 && (
                            <div className="lightbox-nav">
                                <button
                                    onClick={() => setActivePhoto(prev => (prev - 1 + photos.length) % photos.length)}
                                    className="lightbox-arrow"
                                >
                                    ←
                                </button>
                                <span style={{ color: 'var(--muted)', fontSize: 12 }}>
                                    {activePhoto + 1} / {photos.length}
                                </span>
                                <button
                                    onClick={() => setActivePhoto(prev => (prev + 1) % photos.length)}
                                    className="lightbox-arrow"
                                >
                                    →
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div >
    )
}

export default ProjectCard
