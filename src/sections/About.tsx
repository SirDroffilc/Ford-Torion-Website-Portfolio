import fordPortait from "../assets/About/portrait-ford.png";
import emailIcon from "../assets/About/contact-icons/email-icon.svg";
import linkedInIcon from "../assets/About/contact-icons/linkedin-icon.svg";
import facebookIcon from "../assets/About/contact-icons/facebook-icon.svg";
import githubIcon from "../assets/About/contact-icons/github-icon.svg";

function About() {
	return (
		<div className="about-container">
			<div className="about-info">

				<div className="about-info-details">
					<h1>Ford Torion</h1>
					<h2>Software Developer</h2>
					<h3>Hi, I'm Ford!</h3>

					<p>
						A computer science student focused on full-stack web
						development, with a growing interest in game development. I
						enjoy creating projects that reflect my hobbies and
						interests, connecting with others through tech communities,
						and joining hackathons and meetups to learn and collaborate.
					</p>
				</div>
				

				<div className="about-contact">
					<h1>Contact Me</h1>
					<div className="about-contact-icons">
						<a href="https://mail.google.com/mail/?view=cm&fs=1&to=cliffordroytorion@gmail.com" target="_blank">
							<img src={emailIcon} alt="emailIcon" />
						</a>
						<a href="https://www.linkedin.com/in/ford-torion/" target="_blank">
							<img src={linkedInIcon} alt="linkedInIcon" />
						</a>
						<a href="https://www.facebook.com/ford.torion.7" target="_blank">
							<img src={facebookIcon} alt="facebookIcon" />
						</a>
						<a href="https://github.com/SirDroffilc" target="_blank">
							<img src={githubIcon} alt="githubIcon" />
						</a>
					</div>
				</div>
			</div>

			<div className="about-picture">
				<img src={fordPortait} alt="Ford Portrait" />
			</div>
		</div>
	);
}

export default About;
