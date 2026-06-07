import ProjectCard from "./ProjectCard"
import LightRays from "../components/reactbitsComponents/LightRays";


const projects = [
    {
        title: "Indonesian Worker Academy",
        description:
            "Training and education platform for workforce development. Supports user management, course enrollment, and progress tracking.",
        tech: ["python", "Jquery", "Django", "PostgreSQL"],
        period: "2024",
        photos: [
            'src/assets/IWA 1.jpg',
        ]
    },
    {
        title: "KIERA ERP",
        description:
            "Enterprise resource planning system for operational management — handling inventory, HR, and financial workflows across the organization.",
        tech: ["python", "Django", "Jquery", "REST API", "PostgreSQL"],
        period: "2024 – 2025",
        photos: [
            'src/assets/KIERA 1.jpg',
            'src/assets/KIERA 2.jpg',
            'src/assets/KIERA 3.jpg',
            'src/assets/KIERA 4.jpg'
        ]
    },
    {
        title: "SAPA",
        description:
            "Sales partnership management system with PDF generation, multi-stage approval workflows, and real-time status tracking.",
        tech: ["python", "Django", "Jquery", "PDFKit", "PostgreSQL", "Pentahoo", "Trino", "Oracle DB"],
        period: "2025 - Present",
        photos: [
            'src/assets/SAPA 1.jpg',
            'src/assets/SAPA 2.jpg',
            'src/assets/SAPA 3.jpg',
            'src/assets/SAPA 4.jpg'
        ]
    },
    {
        title: "Tabungan",
        description:
            "Smart budgeting, effortless tracking, and secure financial growth in the palm of your hand.",
        tech: ['HTML', 'Google Apps Script', 'Google Sheets'],
        period: "2025 - Present",
        photos: [
            'src/assets/Tabungan 1.jpg',
            'src/assets/Tabungan 2.jpg',
            'src/assets/Tabungan 3.jpg',
            'src/assets/Tabungan 4.jpg'
        ]
    },
]

function Projects() {
    return (
        <section className="projects" id="projects" style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{
                position: 'absolute',
                inset: 0,
                zIndex: 0,
                pointerEvents: 'none',
            }}>
                <div style={{ width: '100%', height: '600px', position: 'absolute' }}>
                    <LightRays
                        raysOrigin="top-center"
                        raysColor="#ffffff"
                        raysSpeed={1}
                        lightSpread={0.5}
                        rayLength={3}
                        followMouse={true}
                        mouseInfluence={0.1}
                        noiseAmount={0}
                        distortion={0}
                        className="custom-rays"
                        pulsating={false}
                        fadeDistance={1}
                        saturation={1}
                    />
                </div>
            </div>


            <div className="section-header">
                <div>
                    <p className="section-label">Selected Work</p>
                    <h2 className="section-title">Projects</h2>
                </div>
            </div>

            <div className="projects-grid-2">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        index={index}
                        title={project.title}
                        description={project.description}
                        tech={project.tech}
                        period={project.period}
                        photos={project.photos || []}
                    />
                ))}
            </div>
        </section>
    )
}

export default Projects
