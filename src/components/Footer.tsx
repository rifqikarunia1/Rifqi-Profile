import ShinyText from "../components/reactbitsComponents/ShinyText";



function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="footer" id="contact">
            <span className="footer-label"><ShinyText
                text="Let's Connect!"
                speed={2}
                delay={0}
                color="#b5b5b5"
                shineColor="#ffffff"
                spread={120}
                direction="left"
                yoyo={false}
                pauseOnHover={false}
                disabled={false}
            /></span>
            <h2 className="footer-headline">
                Let's Build<br />Something Great.
            </h2>

            <div className="footer-links">
                <a href="mailto:rifqikaruniaibadirachman.9a@gmail.com" className="footer-link">
                    ✉ Email
                </a>
                <a href="https://www.linkedin.com/in/rifqikarunia" target="_blank" rel="noreferrer" className="footer-link">
                    in LinkedIn
                </a>
                <a href="https://github.com/rifqikarunia1" target="_blank" rel="noreferrer" className="footer-link">
                    ⌥ GitHub
                </a>
                <a href="https://wa.me/62" target="_blank" rel="noreferrer" className="footer-link">
                    💬 WhatsApp
                </a>
            </div>

            <div className="footer-bottom">
                <span className="footer-logo">RK.</span>
                <span className="footer-copy">
                    © {year} Rifqi Karunia. Design & built by Rifqi Karunia.
                </span>
            </div>
        </footer>
    )
}

export default Footer
