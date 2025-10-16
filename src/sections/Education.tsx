import tupLogo from "../assets/Education/tup-logo.png";
import mrsciLogo from "../assets/Education/mrsci-logo.png";
import emailIcon from "../assets/About/contact-icons/email-icon.svg";
import linkedInIcon from "../assets/About/contact-icons/linkedin-icon.svg";
import facebookIcon from "../assets/About/contact-icons/facebook-icon.svg";
import githubIcon from "../assets/About/contact-icons/github-icon.svg";

function Education() {
	return (
		<div className="education-container">
			<hr />
			<h1 id="education">Education</h1>

			<div className="education-secondary-container">
				<div className="school-container">
					<div className="school-logo">
                        <img src={tupLogo} alt="TUPM Logo" />
                    </div>

					<div className="school-info">
						<h2>Bachelor of Science in Computer Science</h2>
						<div className="school-details">
							<p className="school-name">Technological University of the Philippines - Manila</p>
                            <p className="school-date">2023 - Present</p>
							<p className="school-achievement">&bull; Consistent Academic Achiever with a Current General Weighted Average of 1.32</p>
						</div>
					</div>
				</div>

                <div className="school-container">
					<div className="school-logo">
                        <img src={mrsciLogo} alt="MRSCI Logo" />
                    </div>

					<div className="school-info">
						<h2>S.T.E.M. Strand Senior High School</h2>
						<div className="school-details">
							<p className="school-name">Mystical Rose School of Caloocan, Inc.</p>
                            <p className="school-date">2021 - 2023</p>
							<p className="school-achievement">&bull; Graduated as With High Honors and the S.T.E.M. Valedictorian of Batch 2022-2023.</p>
						</div>
					</div>
				</div>
			</div>

            <div className="education-contact">
                <h1>Contact Me</h1>
                <div className="education-contact-icons">
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=cliffordroytorion@gmail.com"
                        target="_blank"
                    >
                        <img src={emailIcon} alt="emailIcon" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/ford-torion/"
                        target="_blank"
                    >
                        <img src={linkedInIcon} alt="linkedInIcon" />
                    </a>
                    <a
                        href="https://www.facebook.com/ford.torion.7"
                        target="_blank"
                    >
                        <img src={facebookIcon} alt="facebookIcon" />
                    </a>
                    <a
                        href="https://github.com/SirDroffilc"
                        target="_blank"
                    >
                        <img src={githubIcon} alt="githubIcon" />
                    </a>
                </div>
            </div>
		</div>
	);
}

export default Education;
