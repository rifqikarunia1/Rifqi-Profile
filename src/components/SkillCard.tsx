type SkillCardProps = {
    name: string
    icon: string
}

function SkillCard({ name, icon }: SkillCardProps) {
    return (
        <div className="skill-card-v2">
            <img src={icon} alt={name} className="skill-icon" />
            <span className="skill-name">{name}</span>
        </div>
    )
}

export default SkillCard